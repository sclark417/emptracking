USE employer_DB;

INSERT INTO department(name) VALUES ("Engineer", "Intern", "", "Accountant", "Manager", "Administration");

INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 40508, 2),("Intern", 40508, 3),("Manager", 40508, 4), ("Administrator", 102000, 6), ("S.S. Teacher", 40508, 5),;

INSERT INTO employee (first_name, Last_name, role_id, manager_id) VALUES ("Barbra", "Sue", 6, NULL), ("John", "Smith", 2, 1)