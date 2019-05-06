const db = require("../models");

const express = require("express");
const router = express.Router();

// Router
router.post("/api/servant/new", (req, res) => {
  let sushiId = req.body.sushiId;

  db.Servant.findOrCreate({
    where: {
      servantName: req.body.servantName
    }
  })
    .then(([servant, created]) => {
      return db.Sushi.update(
        {
          ServantId: servant.id,
          devoured: true
        },
        {where: {
          id: sushiId
        }}
      )
        .then(() => {
          res.status(200).end();
        })
        .catch(() => {
          res.status(404).end();
        });
    });
});

module.exports = router;