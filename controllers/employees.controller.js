import connection from "../db";

function getAll(){
    return new Promise((resolve, reject) => {
        //This is where we actually use SQL to talk to the database
        connection.query(`SELECT * FROM employees`, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });
}

export default {
    getAll
}