var mongoose = require('mongoose')

const dbconnect = function(){
//  connect to the database
const dbURL = 'mongodb+srv://admin:admin123@cluster0.dtm4u.mongodb.net/test';
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

};

module.exports = dbconnect;