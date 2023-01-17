/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name:  Aparajeeta Diwya    Student ID: 130958218  Date: 19th January, 2023
*
*  Cyclic Web App URL: https://drab-gold-goat-toga.cyclic.app/
*
*  GitHub Repository URL: https://github.com/adiwya/assignment-1-
*
********************************************************************************/ 

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Aparajeeta Diwya - 130958218");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);