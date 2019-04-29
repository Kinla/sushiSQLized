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
    const sushi = req.body.sushiName
    sushi.insert(sushi, (result) => {
        res.json({ id: result.insertId });
    })
})

router.put("/api/sushi/:id", (req, res) => {
    const id = req.body.id
    sushi.updateById(id, (result) => {
        console.log(`server side: ${result}`)
        if (result.changedRows === 0) {
            res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

module.exports = router  