const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 8080;

//parse request data content type applicaiton/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hell");
});

//import employee routes
const employeeRoutes = require("./src/routes/employee.route");

//create employee routes
app.use("/api/v1/employee", employeeRoutes);

app.listen(port, () => {
  console.log("server is running at " + port);
});
