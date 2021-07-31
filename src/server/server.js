var expressClass = require("express");
var bodyParser = require("body-parser");
var posts = require("./posts");
var lodash = require('lodash');
var moment = require('moment');
var guid = require('guid');

var express = new expressClass();

express.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    res.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

express.use(bodyParser.json());
express.use(
    bodyParser.urlencoded({
        extended: true
    })
);

express.get("/posts", function (request, response) {
   posts = lodash.orderBy(posts, ['data'],['desc']);
   posts.forEach(function(element){
    element.comentarios = lodash.orderBy(element.comentarios, ['data'], ['desc']);
   });
   response.json(posts);
});

express.get("/post/:id", function (request, response){
    var post = posts.find(x => x.id === request.params["id"]);
    post.comentarios = lodash.orderBy(post.comentarios, ['data'], ['desc']);
    response.json(post);
});

express.post("/post", function (request, response) {
    var post = request.body;
    post.id = guid.raw();
    post.data = moment().toISOString();
    post.like = 0;
    post.dislike = 0;
    post.comentario = [];
    posts.push(post);
    response.json();
});

express.post("/post/addComment", function(request, response) {
    var post = posts.find(x => x.id === request.body.id);
    post.comentarios.push({
        id: guid.raw(),
        texto: request.body.comentario,
        data: moment().toISOString()
    });
    response.json();
});

express.put("/post/setReaction", function (request, response) {
   var post = posts.find(x => x.id === request.body.id);
   if(request.body.tipo === 1){
      post.like += 1;
   } else{
      post.dislike += 1;
   }
   response.json();
});

express.listen(8888);