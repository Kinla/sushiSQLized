const sushi = require("../models/sushi.js")

// Router
const router = {
    get: (app, callback) => {
        app.get("/", (req, res) => {
            sushi.all(callback)
        })
    },
    post: (app, callback) => {
        app.post("/", (req, res) => {
            const sushi = req.body.sushiName
            sushi.insert(sushi, callback)
        })
    },
    put: (app, callback) => {
        app.put("/", (req, res) => {
            const id = req.body.id
            sushi.updateById(id, callback)
        })
    },
    delete: () => {
        //not necessary for basic app design
    }
}




module.exports = router  