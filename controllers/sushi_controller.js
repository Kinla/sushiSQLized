const db = require("../models")

const express = require("express")
const router = express.Router()

// Router
router.get("/", (req, res) => {
    db.Sushi.findAll({}).then((data) => {
        const sushiObj = {
            sushi: data
        }
        res.render("index", sushiObj)

    })
})

router.post("/api/sushi", (req, res) => {
    let sushi = {
        sushi_name: req.body.name,
        devoured: false
    }
    db.Sushi.create(sushi).then(() => {
        res.end()
    })
})

router.put("/api/sushi/:id", (req, res) => {
    let id = req.body.id
    db.Sushi.update(
        {devoured: true},
        {where: {id: id}}
    ).then(()=> {
        res.status(200).end()
    }).catch(() => {
        res.status(404).end()
    })
})

router.delete("/api/sushi/:id", (req, res) => {
    let id = req.body.id
    db.Sushi.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.end()
    })
})

router.delete("/api/sushi", (req, res) => {
    let val = true
    db.Sushi.destroy({
        where: {
            devoured: val
        }
    }).then(() => {
        res.end()
    })
})

module.exports = router  