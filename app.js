//Import Build
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

// Import User-Defined
const blogRouter = require("./src/routers/blogRouter");

// Starting Project
const app = express();

//change ejs view directory path
//Aslso we have express-ejs-layouts so our file will be in views/layout
app.set("views", path.resolve(__dirname, "./src/views"));
app.use(express.static("public"));
app.use(expressLayouts); // using express-ejs-layouts as a middleware
app.set("view engine", "ejs");

/*
1-When talking about express.json() and express.urlencoded() think specifically about POST requests (i.e. the .post request object) and PUT Requests (i.e. the .put request object)

2-You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

3-You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

4-Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());

b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

5-ALTERNATIVELY, I recommend using body-parser (it is an NPM package) to do the same thing. It is developed by the same peeps who built express and is designed to work with express. body-parser used to be part of express. Think of body-parser specifically for POST Requests (i.e. the .post request object) and/or PUT Requests (i.e. the .put request object).

In body-parser you can do

// calling body-parser to handle the Request Object from POST requests
var bodyParser = require('body-parser');
// parse application/json, basically parse incoming Request Object as a JSON Object 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));
// combines the 2 above, then you can parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.urlencoded({ extended: true }));



*/

//formdan gelen verileri parçalayıp kullanabilmemiz için hazır middleware
app.use(express.urlencoded({ extended: true }));

//Using router
app.use("/", blogRouter);

app.listen(3000, (_) => console.log("3000 port is listening..."));
