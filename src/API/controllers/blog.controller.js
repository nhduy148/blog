'use strict';

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
      foreignField: 'slug',
      as: 'tags',
    }
  }
]


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

    let orderBy = req.query.orderBy ? `${req.query.orderBy}` : "date";
    let order = req.query.order === "ASC" ? 1 : req.query.order === "DESC" ? -1 : -1;
    let limit = req.query.limit ? parseInt(req.query.limit) : 10;
    let post_type = req.query.post_type ? `${req.query.post_type}` : "post";
    let offSet = req.query.offSet ? req.query.offSet : 0;

    DB.open()
      .then(db => db.collection("posts"))
      .then(posts => {
        posts.aggregate([
          ...postQuery,
          { $match: { status: "publish", post_type: post_type } },
          { $unwind: "$author" },
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
    .then( data => res.json(data.data) )
    
  },

  getPostDetials: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let post = 
    isNaN( parseInt(req.params.post) )
    ? `${req.params.post}`
    : parseInt(req.params.post)

    DB.open()
    .then( db=> db.collection("posts") )
    .then( posts => {

      posts.aggregate([
        ...postQuery,
        { $match: {post_id: post} },
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
            comments: 1,
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
      ])
      .toArray((err, data) => {
        if (err) res.json({ err: "No posts yet!" });
        else if( data[0] ) {
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

  getCommentByPostID: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5002');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    let post = 
    isNaN( parseInt(req.params.post) )
    ? `${req.params.post}`
    : parseInt(req.params.post)

    DB.open()
    .then( db => db.collection("comments") )
    .then( comments => {
      comments.aggregate([
        {
          $lookup: {
            from: 'comments',
            localField: 'post_id',
            foreignField: 'post_id',
            as: 'comments'
          }
        },
        { $match: { post_id: post } },
        {
          $project: {
            _id: false,
            comments: 1,
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
        
        if (err) res.json({ err: "Somthing went wrong!" });
        else if( !!data[0] ) res.json(data[0].comments);
        // else res.json(data[0]);
        else res.json({err: "No comments yet!"});

        DB.close();
      })
    })
    .catch(err => res.json({ err: "Somthing went wrong!" }))
  }
}