import express from "express";
import db from "../mockdb";
import employees from "../controllers/employees.controller";

console.log("Employees Object", employees);

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
    console.log("Getting users");
    try {
        const { id } = req.params;
        let data;
        //If we were given some id to work with
        if (id) {
            data = await employees.getOne(id);
            //We don't want to have to
            //write SQL commands here
        } else {
            console.log("Getting employees");
            data = await employees.getAll();
        }
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const newEmployee = req.body;
        const data = await employees.add(newEmployee);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.put("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedEmployee = req.body;
        const data = await employees.update(id, updatedEmployee);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id?", async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await employees.remove(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
});

export default router;