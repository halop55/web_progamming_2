// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000;
// app.listen(port);

// console.log('todo list RESTful API server started on:' + port);

const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('C://todoListApi//api//models//todoListModel.js'),//create model loading here
    bodyParser = require('body-parser');

    //mongoose instance connection url connection
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://halhgcs220333:123@fgwweb2.ko7s0.mongodb.net/');

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());
    
    const routes = require('C://todoListApi//api//routes//todoListRoutes.js');// importing route
    routes(app);

    app.listen(port);

    console.log('todo list RESTfull API server start on :'+ port)

