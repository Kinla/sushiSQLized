const connection = require("./connection.js")

const orm = {
    selectAll: (tableName, callback) =>{
        const queryStr = "SELECT * FROM ??"
        connection.query(
            queryStr,
            [tableName],
            (err, res) => {
                if (err) throw err
                callback(res)
            }
        )
    },
    insertOne: (tableName, colName, colVal, callback) => {
        const queryStr = "INSERT INTO ?? SET ?? = ?"
        connection.query(
            queryStr, 
            [tableName, colName, colVal],
            (err, res) => {
                if (err) throw err
                callback(res)
            }
        )
    },
    updateOne: (tableName, colName, colValue, selectCol, selectVal, callback) => {
        const queryStr = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        connection.query(
            queryStr,
            [tableName, colName, colValue, selectCol, selectVal],
            (err, res) => {
                if (err) throw err
                callback(res)
            }
        )
    },
    deleteOne: (tableName, selectCol, selectVal, callback) => {
        const queryStr = "DELETE FROM ?? WHERE ?? = ?"
        connection.query(
            queryStr,
            [tableName, selectCol, selectVal],
            (err, res) => {
                if (err) throw err
                callback(res)
            }
        )
    }
}

module.exports = orm, console.log("orm.js loaded")

