const express = require('express');
const nunjucks = require('nunjucks');
const data = require("./data")

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
   express:server
});

server.get("/", function(req, res) {
   return res.render("index")
});

server.get("/about", function(req, res) {
   return res.render("about", { items: data })
});

server.get("*", function(req, res) {
   res.status(404).render("not-found")
});

server.listen(5000, function() {
   console.log("O mundo gira e o server roda vacilão!")
});
