const EmployeeModel = require("../models/employee.model");

//get all employee list
exports.getEmployeeList = (req, res) => {
  console.log("here all employee list");
  EmployeeModel.getAllEmployee((err, employees) => {
    console.log("We are here");
    if (err) res.send(err);
    res.send({ status: true, data: employees[0] });
  });
};

//get employee by ID

exports.getEmployeeByIdD = (req, res) => {
  console.log("get emp by id");
  EmployeeModel.getEmployeeByIDSingle(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.send(employee);
  });
};

//create new employee
exports.createNewEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  console.log("Create new employee", employeeReqData);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
      console.log(employee);
      if (err) {
        res.send(err);
      
      }else{
        if(employee.errno){
          res.json({
            status: false,
            message: "error",
            data: employee,
          });
        }else{
          res.json({
            status: true,
            message: "Employee created successfully",
            data: employee[0],
          });
        }
      }
    });
  }
};

//update employee data
exports.updateEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  // console.log("Update employee", employeeReqData);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ success: false, message: "Please fill all fields" });
  } else {
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeReqData,
      (err, employee) => {
        if (err) res.send(err);
        res.json({
          status: true,
          message: "Employee updated successfully",
          data: employee,
        });
      }
    );
  }
};

//delete employee
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployeeById(req.params.id, (err, employee) => {
    if (err) res.send(err);
    res.json({
      success: true,
      message: "Employee deleted successfully",
      data: employee,
    });
  });
};
