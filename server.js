const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Andherecometheirish1!",
  database: "employee_managerDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(
    `You have successfully connected to the internal employee management system, connection id: ${connection.threadId}`
  );
  console.log(
    `------------------------------------------------------------------`
  );
  welcome();
});

function welcome() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "home",
        message:
          "Welcome to the Employee Management System. What would you like to do?",
        choices: [
          "Add departments, roles, or employees",
          "View departments, roles, employees",
          "Update employee roles",
          "Exit",
        ],
      },
    ])
    .then((input) => {
      switch (input.home) {
        case "Add departments, roles, or employees":
          add();
          break;
        case "View departments, roles, employees":
          view();
          break;
        case "Update employee roles":
          updateEmployeeRoles();
          break;
        case "Exit":
          welcome();
          break;
      }
    });
}

function add() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "addHome",
        message:
          "Welcome to the Employee Management System. What would you like to do?",
        choices: ["Add department", "Add role", "Add employee", "Exit"],
      },
    ])
    .then((input) => {
      switch (input.addHome) {
        case "Add department":
          addDept();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
      }
    });
}
function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message:
          "Welcome to the Employee Management System. What would you like to do?",
      },
    ])
    .then((input) => {
      var query = `INSERT INTO department (${input.name})`;
    });
}
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addHome",
        message:
          "Welcome to the Employee Management System. What would you like to do?",
      },
    ])
    .then((input) => {});
}
function add() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addHome",
        message:
          "Welcome to the Employee Management System. What would you like to do?",
        choices: ["Add department", "Add role", "Add employee", "Exit"],
      },
    ])
    .then((input) => {});
}
