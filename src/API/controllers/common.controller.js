const postQuery = [
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
  postQuery: postQuery,
  getNextID: getNextID
}