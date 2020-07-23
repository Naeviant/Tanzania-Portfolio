var express = require("express"),
    config = require("./config"),
    gallery = require("./gallery.json")
    bodyParser = require("body-parser"),
    app = express(),
    session = require("express-session"),
    cookieParser = require("cookie-parser"),
    swig = require("swig");

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/static"));
app.use(cookieParser());
app.use(session({secret: "anything", resave: false, saveUninitialized: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view cache", false);
swig.setDefaults({cache: false});

app.locals = {
    
};

app.get("/", function(req, res) {
    res.render("../template");
});

app.get("/index/", function(req, res) {
    res.render("index");
});

app.get("/diary/", function(req, res) {
    res.render("diary");
});

app.get("/gallery/", function(req, res) {
    res.render("gallery");
});

app.get("/photos/", function(req, res) {
    console.log(parseInt(req.query.offset))
    res.render("./partials/photos.html", { photos: gallery.slice(parseInt(req.query.offset), parseInt(req.query.offset) + 24) });
});

app.get("/fundraising/", function(req, res) {
    res.render("fundraising");
});

app.get("/sponsors/", function(req, res) {
    res.render("sponsors");
});

var server = app.listen(config.app.port, function() {
    console.log("Listening on Port " + config.app.port);
});