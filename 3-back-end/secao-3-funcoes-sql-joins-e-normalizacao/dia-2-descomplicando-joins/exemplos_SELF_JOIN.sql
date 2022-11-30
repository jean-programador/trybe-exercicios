-- Active: 1669147458642@@127.0.0.1@3306@hr
-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) 
-- cujos departamentos (department) são diferentes.
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS 'Employee',
    CONCAT(Manager.first_name, " ", Manager.last_name) AS 'Manager'
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE
    Employee.department_id <> Manager.department_id;

-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
    CONCAT(Manager.first_name, " ", Manager.last_name) AS 'Manager',
    COUNT(*) AS 'total_people_in_squad'
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id;