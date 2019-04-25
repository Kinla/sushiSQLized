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

/*
selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString,[tableName],function(err,result) {
            if (err) throw err
            callback(result)
        })
    },

*/