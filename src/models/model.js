const mongoose = require('mongoose');

// Step 2 - connect to the database
// const dbURL = 'mongodb+srv://admin:admin123@cluster0.dtm4u.mongodb.net/test';
// mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
//   .then((result) => console.log('connected to db'))
//   .catch((err) => console.log(err));


var imageSchema = {
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
};
const Image =  mongoose.model('Image', imageSchema);



const itemsSchema = {
  name:  String
};

const Item = mongoose.model("Item", itemsSchema);


module.exports = {Image, Item};
