const DB = require('../DB/DB');
const Youtube = require('../Youtube');

let postQuery = [
  {
    $lookup: {
      from: 'categories',
      localField: 'category',
      foreignField: 'category_id',
      as: 'category'
    }
  },
  {
    $lookup: {
      from: 'comments',
      localField: 'post_id',
      foreignField: 'post_id',
      as: 'comments'
    }
  },
  {
    $lookup: {
      from: 'users',
      localField: 'author',
      foreignField: 'user_id',
      as: 'author'
    }
  },
  {
    $lookup: {
      from: 'hashtags',
      localField: 'tags',
      foreignField: 'hashtag_id',
      as: 'tags',
    }
  }
]

const getNextID = (db, collectionName) => {
  return new Promise((resolve, reject) => {
    let counters = db.collection("counters");
    return counters.findOneAndUpdate(
      { field: `${collectionName}` },
      { $inc: { value: 1 } },
      { new: true },
      (err, response) => {
        if (err) reject(err);
        else resolve(response);
      }
    );
  })
}


module.exports = {
  home: (req, res) => {
    res.json({ response: "Welcome!!!" })
  },

  getCategories: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    let isAdmin = true;

    DB.open()
      .then(db => db.collection("categories"))
      .then(categories => {
        categories.find({})
          .toArray((err, data) => {
            if (err) res.json({ err: "Somthing went wrong!" });

            else if (!data.length > 0) res.json({ err: "No categories yet!" });

            else {
              if (isAdmin) data = data.filter(e => e.slug !== "not-released");
              res.json(data);
            }

            DB.close()
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  getHashtags: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    DB.open()
      .then(db => db.collection("hashtags"))
      .then(hashtags => {
        hashtags.find({})
          .toArray((err, data) => {
            if (err) res.json({ err: "Somthing went wrong!" });

            else if (!data.length > 0) res.json({ err: "No categories yet!" });

            else res.json(data);
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  getPosts: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let match = req.query.match ? `${req.query.match}` : {};

    let related = !!req.query.related && !!req.query.notin
      ? {
        tags: { $elemMatch: { slug: `${req.query.related}` } },
        post_id: { $nin: [parseInt(req.query.notin)] }
      }
      : {};

    let orderBy = req.query.orderBy ? `${req.query.orderBy}` : "date";
    let order = req.query.order === "ASC" ? 1 : req.query.order === "DESC" ? -1 : -1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let post_type = req.query.post_type ? `${req.query.post_type}` : "post";

    DB.open()
      .then(db => db.collection("posts"))
      .then(posts => {
        posts.aggregate([
          ...postQuery,
          { $unwind: "$author" },
          { $match: { status: "publish", post_type: post_type, ...match, ...related } },
          {
            $project: {
              _id: false,
              post_id: 1,
              title: 1,
              except: 1,
              slug: 1,
              feature_image: 1,
              date: 1,
              view: 1,
              category: 1,
              tags: 1,
              author: "$author.nicename",
              comment_count: {
                $size: {
                  $reduce: {
                    input: "$comments.reply",
                    initialValue: "$comments",
                    in: { $concatArrays: ["$$value", "$$this"] }
                  }
                }
              }
            }
          },
          { $sort: { [orderBy]: order } },
          { $limit: limit },
        ])
          .toArray((err, data) => {
            if (err || !data.length > 0) res.json({ err: "No posts yet!" });
            else res.json(data);
            DB.close();
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  getVideos: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let q = req.query.q ? req.query.q : "Online Tutorials";
    let order = req.query.order ? req.query.order : "date";
    let channelId = req.query.channelId ? req.query.channelId : "UCbwXnUipZsLfUckBPsC7Jog";
    let maxResults = req.query.maxResults ? req.query.maxResults : 6

    Youtube.get('/search', {
      params: {
        q: q,
        order: order,
        channelId: channelId,
        maxResults: maxResults
      }
    })
      .then(data => res.json(data.data))
      .catch(err => res.json({ err: "Somethings went wrong!" + err }))

  },

  getPostDetails: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let post =
      isNaN(parseInt(req.params.post))
        ? `${req.params.post}`
        : parseInt(req.params.post)

    DB.open()
      .then(db => db.collection("posts"))
      .then(posts => {

        posts.aggregate([
          ...postQuery,
          { $match: { post_id: post } },
          { $unwind: "$author" },
          {
            $project: {
              _id: false,
              post_id: 1,
              title: 1,
              content: 1,
              except: 1,
              slug: 1,
              feature_image: 1,
              date: 1,
              view: 1,
              category: 1,
              tags: 1,
              comment: {
                total: {
                  $size: {
                    $reduce: {
                      input: "$comments.reply",
                      initialValue: "$comments",
                      in: { $concatArrays: ["$$value", "$$this"] }
                    }
                  }
                },
                list: "$comments",
              },
              author: "$author.nicename",
              // comment_count: {
              //   $size: {
              //     $reduce: {
              //       input: "$comments.reply",
              //       initialValue: "$comments",
              //       in: { $concatArrays: ["$$value", "$$this"] }
              //     }
              //   }
              // }
            }
          },
        ])
          .toArray((err, data) => {
            if (err) res.json({ err: "No posts yet!" });
            else if (data[0]) {
              posts.findOneAndUpdate(
                { "post_id": data[0].post_id },
                { "$set": { "view": parseInt(data[0].view) + 1 } }
              )

              res.json(data[0]);
            }

            DB.close();
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  getComments: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    let limit = req.query.limit ? parseInt(req.query.limit) : 3;

    let post =
      isNaN(parseInt(req.params.post))
        ? `${req.params.post}`
        : parseInt(req.params.post)

    DB.open()
      .then(db => db.collection("comments"))
      .then(comments => {
        comments.find({ post_id: post, approved: true }).sort({ time: -1 }).limit(limit)
          .toArray((err, data) => {
            if (err) res.json({ err: "Somthing went wrong!" });
            else if (data.length > 0) {
              let total = data.length;
              let list = data;
              data.map(
                comment => comment.reply = comment.reply.filter(reply => reply.approved === true)
              )
              res.json({ total, list })
            }
            else res.json({ err: "No comments yet!" });

            DB.close();
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  postComment: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    const replyFor = !!req.query.replyFor ? parseInt(req.query.replyFor) : null;
    const replyQuery = !!replyFor ? { isReply: true, replyFor: replyFor } : { isReply: true }

    
    DB.open()
      .then(db => {
        const error = { err: "Somethings went wrong. Please try again!" }
        let comments = db.collection("comments");

        getNextID(db, "comment_id")
          .then(getCmtID => {
            if (getCmtID.lastErrorObject.updatedExisting) {
              let data = {
                comment_id: getCmtID.value.value,
                post_id: parseInt(req.body.postID),
                name: req.body.name,
                email: req.body.email,
                time: Date.now(),
                content: req.body.content,
                approved: true,
                type: "text",
                avatar: req.body.avatar,
                is_user: false,
                ...replyQuery
              };

              comments.insertOne(data, (err, response) => {
                
                if (err) return res.status(404).json({status: false, statusText: "Something went wrong! Please try later.", commentAdded: null});
                else {
                  let status = response.insertedCount === 1 ? true : false;
                  let statusText = status ? "Add Success!" : "Something went wrong! Please try later.";
                  let commentAdded = response.ops;
                  res.status(200).json({ status: status, statusText: statusText, commentAdded: commentAdded });
                }
              })
            }
            else return res.status(404).json(error)
          })
          .catch(failed => res.status(404).json({ ...error, failed }))
      })
  },

  getPostsByCategory: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let match = req.query.match ? `${req.query.match}` : {};

    let categoryParam = req.params.category;

    let orderBy = req.query.orderBy ? `${req.query.orderBy}` : "date";
    let order = req.query.order === "ASC" ? 1 : req.query.order === "DESC" ? -1 : -1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;

    let finalResult = {};

    DB.open()
      .then(db => {
        let posts = db.collection("posts")
        // let category = db.collection("categories");
        // category.findOne( 
        //   {slug: categoryParam}, 
        //   (err, data) => {
        //     if (err || data===null) finalResult = { err: "No post in category yet!" };
        //     else finalResult = { ...finalResult, ...data }
        //   })

        posts.aggregate([
          ...postQuery,
          { $unwind: "$author" },
          {
            $match: {
              ...match,
              status: "publish",
              category: {
                "$elemMatch": {
                  slug: categoryParam
                }
              }
            }
          },
          {
            $project: {
              _id: false,
              post_id: 1,
              title: 1,
              except: 1,
              slug: 1,
              feature_image: 1,
              date: 1,
              view: 1,
              category: 1,
              tags: 1,
              author: "$author.nicename",
              comment_count: {
                $size: {
                  $reduce: {
                    input: "$comments.reply",
                    initialValue: "$comments",
                    in: { $concatArrays: ["$$value", "$$this"] }
                  }
                }
              }
            }
          },
          { $sort: { [orderBy]: order } },
          { $limit: limit },
        ])
          .toArray((err, data) => {
            if (err || !data.length > 0) finalResult = { err: "No post in category yet!" };
            else {
              const cate_info = data.map(
                post => post.category.map((cate, i2) => {
                  if (post.category[i2].slug === categoryParam) return post.category[i2];
                })
              )

              finalResult = { ...finalResult, ...cate_info[0][0], posts: data };
            }


            res.json(finalResult);
            DB.close();
          })
      })
      .catch(err => res.json({ err: "Somthing went wrong!" }))
  },

  getCommentsV2: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let limit = req.query.limit ? parseInt(req.query.limit) : 3;
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let offSet = ( limit * page ) - limit;

    let post =
      isNaN(parseInt(req.params.post))
        ? `${req.params.post}`
        : parseInt(req.params.post)

    DB.open()
      .then(db => db.collection("comments"))
      .then(comments => {
        comments.aggregate([
          { $match: { post_id: post, approved: true } },
          { $sort: { time: -1 } },
          {
            $group: {
              _id: null,
              total: { "$sum": 1 },
              list: { "$push": "$$ROOT" }
            }
          },
          { $unwind: "$list" },
          { $skip: offSet },
          { $limit: limit },
          {
            $group: {
              _id: "$_id",
              total: { "$first": "$total" },
              list: { "$push": "$list" }
            }
          }
        ])
        .toArray((err, data) => {
          if (err) res.json( err => res.json({ status: false, errCode: null, errorMessage: err }) );
          else {
            if( !!data[0] ) {
              const total = data[0].total;
              let totalPages = Math.ceil( total / limit )
              let nextPage = page + 1 <= totalPages ? page + 1 : null;
              let prevPage = 0 < page - 1 ? page - 1 : null;
              let hasNextPage = nextPage !== null ? true : false;
              let hasPrevPage = prevPage !== null ? true : false;
              let remaining = total > (limit *  page) ? total - (limit *  page) : 0;

              let info = {
                total: total,
                limit: limit,
                page: page,
                totalPages: totalPages,
                hasNextPage: hasNextPage,
                nextPage: nextPage,
                hasPrevPage: hasPrevPage,
                prevPage: prevPage,
                remaining: remaining,
              }
              let list = data[0].list;

              res.json({
                status: true,
                errCode: null,
                errorMessage: "",
                result: {
                  ...info, list: list
                }
              });
            }
            else {
              res.json({
                status: true,
                errCode: null,
                errorMessage: "",
                result: {     
                  "total": 0,
                  "limit": 0,
                  "page": 0,
                  "totalPages": 0,
                  "hasNextPage": false,
                  "nextPage": null,
                  "hasPrevPage": false,
                  "prevPage": null,
                  "remaining": 0,
                  "list": [] 
                }
              })
            }
          }

          DB.close();
        })
      })
      .catch( err => res.json({ status: false, errCode: null, errorMessage: err }) )
  },

  getPostsV2: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let match = req.query.match ? `${req.query.match}` : {};

    let related = !!req.query.related && !!req.query.notin
      ? {
        tags: { $elemMatch: { slug: `${req.query.related}` } },
        post_id: { $nin: [parseInt(req.query.notin)] }
      }
      : {};

    let orderBy = req.query.orderBy ? `${req.query.orderBy}` : "date";
    let page = req.query.page ? parseInt(req.query.page) : 1;
    let order = req.query.order === "ASC" ? 1 : req.query.order === "DESC" ? -1 : -1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let post_type = req.query.post_type ? `${req.query.post_type}` : "post";
    let offSet = ( limit * page ) - limit;

    DB.open()
      .then(db => db.collection("posts"))
      .then(posts => {
        posts.aggregate([
          ...postQuery,
          { $unwind: "$author" },
          { $match: { status: "publish", post_type: post_type, ...match, ...related } },
          { $sort: { [orderBy]: order } },
          {
            $group: {
              _id: null,
              total: { "$sum": 1 },
              list: { "$push": "$$ROOT" }
            }
          },
          { $unwind: "$list" },
          { $skip: offSet },
          { $limit: limit },
          {
            $group: {
              _id: "$_id",
              total: { "$first": "$total" },
              list: { "$push": "$list" }
            }
          }
        ])
        .toArray((err, data) => {
          if (err) res.json( err => res.json({ status: false, errCode: null, errorMessage: err }) );
          else {
            if( !!data[0] ) {
              const total = data[0].total;
              let totalPages = Math.ceil( total / limit )
              let nextPage = page + 1 <= totalPages ? page + 1 : null;
              let prevPage = 0 < page - 1 ? page - 1 : null;
              let hasNextPage = nextPage !== null ? true : false;
              let hasPrevPage = prevPage !== null ? true : false;
              let remaining = total - (limit *  page);

              let info = {
                total: data[0].total,
                limit: limit,
                page: page,
                totalPages: totalPages,
                hasNextPage: hasNextPage,
                nextPage: nextPage,
                hasPrevPage: hasPrevPage,
                prevPage: prevPage,
                remaining: remaining,
              }
              let list = data[0].list;

              res.json({
                status: true,
                errCode: null,
                errorMessage: "",
                result: {
                  ...info, list: list
                }
              });
            }
            else {
              res.json({
                status: true,
                errCode: null,
                errorMessage: "",
                result: {     
                  "total": 0,
                  "limit": 0,
                  "page": 0,
                  "totalPages": 0,
                  "hasNextPage": false,
                  "nextPage": null,
                  "hasPrevPage": false,
                  "prevPage": null,
                  "list": [] 
                }
              })
            }
          }

          DB.close();
        })
    })
    .catch( err => res.json({ status: false, errCode: null, errorMessage: err }) )
  },

  test: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    DB.open()
    .then( db => db.collection("comments") )
    .then( comments => {
      comments.updateMany({}, {$set: { isReply: false }}, (err, result) => {
        if(err) res.json(err);
        else res.json(result);
      })
    })
    .catch( err => res.json(err) )

  }
}