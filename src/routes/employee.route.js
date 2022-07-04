const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");

//get all employee
router.get("/", employeeController.getEmployeeList);

//get emp by ID
router.get('/:id',employeeController.getEmployeeByIdD)

//create new employee
router.post('/',employeeController.createNewEmployee)

//update employee
router.put("/:id",employeeController.updateEmployee)

//deleted emplyee
router.delete("/:id",employeeController.deleteEmployee)

module.exports = router;
