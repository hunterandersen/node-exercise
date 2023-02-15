import connection from "../db";

function dbQuery(queryStr, vals){
    return new Promise((resolve, reject) => {
        connection.query(queryStr, vals, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
}

export default dbQuery;