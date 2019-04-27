/*
router.get('/', function(req,res){
    burger.all(function(data) {
        console.log(data)
        var hbsObj = {
            burgers: data
        }
        res.render('index',hbsObj)
    })
})
*/
// Set up express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"))

// Set up routes
const route = require("./controllers/sushi_controller.js")
app.get("/", (req, res) => {
    res.render("index")
})


//route.get(app)
//route.post(app)
//route.put(app)

// Callback functions to pass into routes
//
//
//
//



// Set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listen to port
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});