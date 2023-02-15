import mysql from "mysql2";
import config from "../config";

const connection = mysql.createPool(config.mysql);

function dbQuery(queryStr, queryParams) {
  console.log(`Querying db with:${queryStr}`);
  return new Promise((resolve, reject) => {
    connection.query(queryStr, queryParams, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export default dbQuery;
