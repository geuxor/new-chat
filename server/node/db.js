const db = {
  msgs : [{
    content : 'A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing',
    authorId : true,
    timestamp: 1112231224946
  },
  {
    content : 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    authorId : true,
    timestamp : 1221631224946
  },
  {
    content: 'You can observe a lot just by watching.',
    authorId: false,
    timestamp: 1324611224946
  },
  {
    content : 'Be the chief but never the lord.',
    authorId: false,
    timestamp: 1424131224946
  }
  ]
};

//POST
//message itself
//who sent it
//timestamp

//GET
//display these in order;
function getMessages () {
  return db.msgs;
}
module.exports = {
  getMessages
};
 
