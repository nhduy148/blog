'use strict';

const DB = require('../DB')

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
        if( err || !data.length > 0 ) { res.json({ err: "No categories yet!" }) }
        else {
          if(isAdmin) data = data.filter( e => e.slug !== "not-released");
          res.json(data);
        }

        DB.close()
      })
    })
    .catch( err => res.json({ err: "Somthing went wrong!" }) )
  },

  getPosts: (req, res) => {
    DB.open()
    .then( db => db.collection("posts") )
    .then( posts => {
      posts.aggregate([
        { $match: { status: "publish" } },
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
        }
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