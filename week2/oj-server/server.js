var express = require('express')
var app = express()
var restRouter = require("./routes/rest");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://user:hzr8752136@ds157742.mlab.com:57742/coj");
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use("/api/v1", restRouter);

app.use(function (req, res) {
  res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
});

app.listen(3000, () => console.log('App listening on port 3000!'))
