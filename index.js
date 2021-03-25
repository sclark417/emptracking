const inquirer = require("inquirer");
const mysql = require("mysql");
// const cTable = require('console.table');
const connection = require("./db_connection");

employeeAdd = function () {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "Please provide a first name",
      },
      {
        message: "Please provide a last name",
        name: "last_name",
        type: "input",
      },
      {
        message: "Please provide a role id",
        name: "role_id",
        type: "input",
      },
      {
        message: "Please provide a department id",
        name: "department_id",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log("New role being added");
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          role_id: answer.role_id,
          department_id: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log("New role created");
          initPrompt();
        }
      );
    });
};

roleAdd = function () {
  let department = [];
  connection.query("SELECT name FROM department", (err, res) => {
    if (err) throw err;
    res.forEach((item) => department.push(item.name));
  });
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "Please provide a role title",
      },
      {
        name: "salary",
        type: "input",
        message: "Please provide a yearly salary",
      },
      {
        message: "Select department for your role",
        name: "department",
        type: "input",
      },
    ])
    .then((answer) => {
      console.log("New role being added");
      connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department,
        },
        (err) => {
          if (err) throw err;
          console.log("New role created");
          initPrompt();
        }
      );
    });
};

departmentAdd = function () {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Please provide a department name",
      },
    ])
    .then((answer) => {
      console.log("New department being added");
      connection.query(
        "INSERT INTO department SET ?",
        { name: answer.name },
        (err) => {
          if (err) throw err;
          console.log("New department created");
          initPrompt();
        }
      );
    });
};

// View functions

departmentView = () => {
  connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};

roleView = () => {
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};

employeeView = () => {
  connection.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    initPrompt();
  });
};

// Prompt initialize
function initPrompt() {
  inquirer
    .prompt({
      name: "operation",
      type: "list",
      message: "Please pick an operation:",
      choices: [
        "View a Department",
        "Add a Department",
        "View a Role",
        "Add a Role",
        "View an Employee",
        "Add an Employee",
        "Update an Employee",
      ],
    })
    .then(function (answer) {
      // based on their answer, either call the bid or the post function
      const { operation } = answer;

      switch (operation) {
        case "View a Department":
          departmentView();
          break;
        case "Add a Department":
          departmentAdd();
          break;
        case "View a Role":
          roleView();
          break;
        case "Add a Role":
          roleAdd();
          break;
        case "View an Employee":
          employeeView();
          break;
        case "Add an Employee":
          employeeAdd();
          break;
        default:
          connection.end();
      }
    });
}

initPrompt();
