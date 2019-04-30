const sushi = require("../models/sushi.js")

const express = require("express")
const router = express.Router()

// Router

router.get("/", (req, res) => {
    sushi.all((data) => {
        const sushiObj = {
            sushi: data
        }
        res.render("index", sushiObj)
    })
})

router.post("/api/sushi", (req, res) => {
    let sushiName = req.body.name
    sushi.insert(sushiName, (result) => {
        res.end()
    })
})

router.put("/api/sushi/:id", (req, res) => {
    let id = req.body.id
    sushi.updateById(id, (result) => {
        if (result.changedRows === 0) {
            res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

router.delete("/api/sushi/:id", (req, res) => {
    let col = "id"
    let id = req.body.id
    sushi.deleteByCondition(col, id, (result) => {
        res.end()
    })
})

router.delete("/api/sushi", (req, res) => {
    let col = "devoured"
    let val = true
    sushi.deleteByCondition(col, val, (result) => {
        res.end()
    })
})

module.exports = router  