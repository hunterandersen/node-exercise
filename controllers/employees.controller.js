//import connection from "../db";
import query from "../db/utils.js";

//CRUD operations
//Reading Data
function getAll() {
    return query(`SELECT * FROM employees`);
}

function getOne(id){
    return query(`SELECT * FROM employees WHERE EmployeeID = ?`, [id]);
}

//Create Data
function add(data){
    return query(`INSERT INTO employees SET ?`, [data]);
}

//Update Data
function update(id, data){
    return query(`UPDATE employees SET ? WHERE EmployeeID = ?`, [data, id]);
}

//Delete Data
function remove(id) {
    return query(`DELETE FROM employees WHERE EmployeeID = ?`, [id]);
}

export default {
    getAll,
    getOne,
    add,
    update,
    remove
}