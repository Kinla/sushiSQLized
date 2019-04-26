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
        orm.selectAll("sushi", callback)
    },
    insert: (sushiName, callback) => {
        orm.insertOne("sushi", "sushi_name", sushiName, callback)
    },
    updateByName: (sushiName, callback) => {
        orm.updateOne("sushi", "devoured", true, "sushi_name", sushiName, callback)
    },
    updateById: (id, callback) => {
        orm.updateOne("sushi", "devoured", true, "id", id, callback)
    } 
}

module.exports = model