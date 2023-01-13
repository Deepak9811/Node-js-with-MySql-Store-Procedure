const dbConn = require("../../config/db.config");

var Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.designation = employee.designation;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

//get all employees
Employee.getAllEmployee = (result) => {
  let query = "call get_employee_info()";
  // let query1 = "call LIBCON_C_Count ('CLBITSOM')"
  dbConn.query(query, (err, res) => {
    if (err) {
      console.log("Error whle fetching employee", err);
      result(null, err);
    } else {
      console.log("Employee fetched successfully", res);
      result(null, res);
    }
  });
};

//get employee by ID from Db
Employee.getEmployeeByIDSingle = (id, result) => {
  dbConn.query(`select * from employee where id=?`, id, (err, res) => {
    if (err) {
      console.log("Error while fetching employee by ID", err);
      result(null, { error: err.sqlMessage });
    } else {
      console.log("no data found");
      result(null, res);
    }
  });
};

//create new employee
Employee.createEmployee = (employeeReqData, result) => {
  // return(    console.log("bank response :- ",employeeReqData))
  let newObjectData = [
    employeeReqData.first_name,
    employeeReqData.last_name,
    employeeReqData.email,
    employeeReqData.phone,
    employeeReqData.organization,
    employeeReqData.designation,
    employeeReqData.salary,
    employeeReqData.status,
  ];
  let query = `call addEmployee('${employeeReqData.first_name}','${employeeReqData.last_name}','${employeeReqData.email}','${employeeReqData.phone}','${employeeReqData.organization}','${employeeReqData.designation}','${employeeReqData.salary}','${employeeReqData.status}')`;
  console.log("newObjectData :- ", query);
  // let query = `call addEmployee("${ employeeReqData.first_name}")`;
  let query1 = `insert into employee set ?`;
  dbConn.query(query, (err, res) => {
    if (err) {
      console.log("Error while fetching employee by ID", err.sqlMessage);
      result(null, err);
    } else {
      result(null, res);
    }
  });

  // dbConn.query(`insert into employee set ?`, employeeReqData, (err, res) => {
  //   if (err) {
  //    console.log("Error while fetching employee by ID", err.sqlMessage);
  //    result(null, { error: err.sqlMessage });
  //   } else {
  //     result(null, res);
  //   }
  // });
};

//update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
  dbConn.query(
    "update employee set first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? where id=?",
    [
      employeeReqData.first_name,
      employeeReqData.last_name,
      employeeReqData.email,
      employeeReqData.phone,
      employeeReqData.organization,
      employeeReqData.designation,
      employeeReqData.salary,
      employeeReqData.status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the employee", err);

        result(null, { error: err.sqlMessage });
      } else {
        console.log("Employee updated successfully");
        result(null, res);
      }
    }
  );
};

//deleted employee
// Employee.deleteEmployeeById = (id,result)=>{
//     dbConn.query('delete from employee where id=?',[id],(err,res)=>{
//         if(err){
//             result(null,{error:err.sqlMessage})
//         }else{
//             result(null,res)
//         }
//     })
// }

//subdeleted employee
Employee.deleteEmployeeById = (id, result) => {
  dbConn.query(
    "update employee set is_deleted=? where id=?",
    [1, id],
    (err, res) => {
      if (err) {
        console.log("Error while SubDeleting the employee", err);

        result(null, { error: err.sqlMessage });
      } else {
        console.log("Employee SubDeleted successfully");
        result(null, res);
      }
    }
  );
};

module.exports = Employee;
