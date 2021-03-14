var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("Listening on 8080");
});
