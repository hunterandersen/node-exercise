import query from "../db";

//Read
async function getAll() {
  return await query(`SELECT * FROM employees`);
}

//Read
async function getOne(id){
    return await query(`SELECT * FROM employees WHERE EmployeeID = ?`, [id]);
}

//Create, AKA insert
async function add(employee){
    return await query(`INSERT INTO employees SET ?`, employee);
}

//Update
async function update(id, data){
    return await query(`UPDATE employees SET ? WHERE EmployeeID = ?`, [data, id]);
}

//Delete
async function remove(id){
    return await query(`DELETE FROM employees WHERE EmployeeID = ?`, id);
}

export default {
  getAll,
  getOne,
  add,
  update,
  remove
};
