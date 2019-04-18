const connection = require("connection.js")

let orm = {
    selectAll: (callback) =>{
        connection.query(
            "SELECT * from sushi",
            (err, res) => {
                if (err) throw err
                callback(res)
            }
        )
    },
    insertOne: () => {

    },
    updateOne: () => {

    }
}

module.exports = orm
