const express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
let db = mongoose.connection;
const homePage= require("./routes/home")
const todo= require("./routes/todo")



mongoose.connect(
    "mongodb://localhost:27017/todo_fancy",
    { useNewUrlParser: true }
  );


let app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
// app.use(function(req, res, next) {
//   next(createError(404));
// });





app.use('/',homePage)
app.use('/user/todo',todo)





db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongoose: connected to localhost 3000");
});

app.listen(3000, () => console.log("app listening on port 3000!"));

module.exports = {app,mongoose}
