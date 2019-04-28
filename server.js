// Set up express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define static content folder
app.use(express.static("public"));

// Set up routes
const routes = require("./controllers/sushi_controller.js");
app.use(routes);

// Set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listen to port
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});