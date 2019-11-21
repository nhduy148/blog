'use strict';

const DB = require('../DB');
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
    let isAdmin = true;

    DB.open()
    .then( db => db.collection("categories") )
    .then( categories => {
      categories.find( {} ).toArray( (err,data) => {
        if( err ) res.json({ err: "Somthing went wrong!" });

        else if( !data.length > 0 ) res.json({ err: "No categories yet!" });

        else {
          if(isAdmin) data = data.filter( e => e.slug !== "not-released");
          res.json(data);
        }

        DB.close()
      })
    })
    .catch( err => res.json({ err: "Somthing went wrong!" }) )
  },

  getHashtags: (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    DB.open()
    .then( db => db.collection("hashtags") )
    .then( hashtags => {
      hashtags.find({})
      .toArray( (err, data) => {
        if( err ) res.json({ err: "Somthing went wrong!" });
        
        else if( !data.length > 0 ) res.json({ err: "No categories yet!" });

        else res.json(data);
      })
    })
    .catch( err => res.json({ err: "Somthing went wrong!" }) )
  },

  getPosts: (req, res) => {

    let orderBy = `${req.query.orderBy}` || "date";
    let order = req.query.order === "ASC" ? 1 : req.query.order === "DESC" ? -1 : -1;
    let limit = parseInt(req.query.limit) || 10;
    let offSet = req.query.offSet || 0;
    
    // console.log( { $sort: { [orderBy]: order} } );

    DB.open()
    .then( db => db.collection("posts") )
    .then( posts => {
      posts.aggregate([
        ...postQuery,
        { $match: { status: "publish" } },
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
                  in: { $concatArrays : ["$$value", "$$this"] }
                }
              }
            }
          }
        },
        { $sort: { [orderBy]: order} },
        { $limit: limit },
      ])
      .toArray( (err, data) => {
        if( err || !data.length > 0 ) res.json({ err: "No posts yet!" });
        else res.json(data);

        DB.close();
      })
    })
    .catch( err => res.json({ err: "Somthing went wrong!" }) )
  }
}