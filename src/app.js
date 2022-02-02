const express = require("express");
const mongoose = require('mongoose');

var fs = require('fs');

const app = express();
app.set('view engine', 'ejs');

// STEP -- alternately import from config/db.js
// const dbURL = 'mongodb+srv://admin:admin123@cluster0.dtm4u.mongodb.net/test';
// mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology:true})
//   .then((result) => console.log('connected to db'))
//   .catch((err) => console.log(err));

const connection = require("./config/db.js");
connection(); 

// const itemsSchema = {
//     name:  String
// };
  
// const Item = mongoose.model("Item", itemsSchema);

var modelsitem = require("./models/model.js")
var Item = modelsitem.Item;

var Imageupload= modelsitem.Image;

//display what is in database
app.get("/", function(req, res) {
    Item.find({}, function(err, foundItems){ 
     res.json(foundItems);
     console.log(foundItems);     
    });
    
});


// ****** save  *****


// var apple = {
//   name: "pratik2121"
// };

// Item.insertMany(apple, function(error, docs) {});

// const item = new Item({
//   name: "Pratik Khanal"
// });
// // item.save();

// ****image saving***
// img path
// var imgPath = './slide_2.jpg';


// const imagee = new Imageupload({
//   name: "Pratik",
//   desc: "He is a good boy",
//   img:
//   {
//       data: fs.readFileSync(imgPath),
//       contentType: 'image/png',
//   }
// });
// imagee.save();

// ***to view*** 
// app.get("/", function(req, res) {
//     Imageupload.find({}, function(err, found){ 
//     res.render("image", { newListItems: found}); 
                  // image is not displayed in the proper format, however other data is recieved from db
//   });
// });


// ****** Update  *****
// Item.updateOne({_id : "61f656b8729342a6e35d49a9"}, {name:"Khanal"}, function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("success");
//   }

//   }
// );




// ****** delete  *****
// Item.deleteOne({ name: 'b' },function(err){
//   if(err){
//     console.log(err);
//   }else {
//     console.log("success delete");
//   }
// });



app.listen(3000, function() {
console.log("Server started on port 3000");
});
  