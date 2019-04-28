const sushi = require("../models/sushi.js")

const express = require("express")
const router = express.Router()

// Router

router.get("/", (req, res) => {
    sushi.all((data) => {
        const sushiObj = {
            sushi: data
        }
        console.log(sushiObj)
        res.render("index", sushiObj)
    })
})

router.post("/api/sushi", (req, res) => {
    const sushi = req.body.sushiName
    sushi.insert(sushi, () => {
        res.redirect("/")
    })
})

router.put("/api/sushi/:id", (req, res) => {
    const id = req.body.id
    sushi.updateById(id, () => {
        res.redirect("/")
    })
})

router.post("/api/cats", function(req, res) {
    cat.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update(
      {
        sleepy: req.body.sleepy
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  





module.exports = router  