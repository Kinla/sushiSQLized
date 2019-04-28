/*
all: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    },

*/

const orm = require("../config/orm.js")

const model = {
    all: (callback) => {
        orm.selectAll("sushi", () => {
            callback(res)
        })
    },
    insert: (sushiName, callback) => {
        orm.insertOne("sushi", "sushi_name", sushiName, () => {
            callback(res)
        })
    },
    updateByName: (sushiName, callback) => {
        orm.updateOne("sushi", "devoured", true, "sushi_name", sushiName, () => {
            callback(res)
        })    
    },
    updateById: (id, callback) => {
        orm.updateOne("sushi", "devoured", true, "id", id, () => {
            callback(res)
        })
    },
    deleteByName: (sushiName, callback) => {
        orm.deleteOne("sushi", "sushi_name", sushiName, () => {
            callback(res)
        })
    },
    deleteByID: (id, callback) => {
        orm.deleteOne("sushi", "id", id, () => {
            callback(res)
        })
    }
}

module.exports = model