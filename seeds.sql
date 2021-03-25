USE dre_db;


INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('IT');

USE dre_db;

INSERT INTO role (title, salary, department_id)
VALUES('Intern', 5000, 1), 
('Junior Engineer', 65000, 1),
('Staff Engineer', 80000, 1),
('Senior Engineer', 120000, 1),
('Intern', 5000, 2),
('Accountant', 65000, 2),
('Analyst', 80000, 2),
('Advisor', 120000, 2),
('Intern', 5000, 3),
('Junior Developer', 65000, 3),
('Project Developer', 80000, 3),
('Senior Developer', 120000, 3);


INSERT INTO employee (firstName, lastName, role_id)
VALUES('Clark', 'Stephen', 1), 
('Barry', 'Manilow', 2),
('Jacob', 'Dolph', 3),
('Melissa', 'Dorazil', 4),
('Matt', 'Dizzle', 5),
('Henry', 'Mgee', 6),
('Jonny', 'Cash', 7),
('Tiger', 'King', 8),
('Bobby', 'Shmurda', 9),
('Kevin', 'Johnson', 10),  
('Billy', 'Mountaintop', 11),
('Holy', 'Diver', 12),
('Jess', 'Earl', 3),
('Billy', 'Bonny', 11);

