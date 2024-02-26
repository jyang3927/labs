-- Select all the records from the customers table. 
SELECT * FROM customers;

-- Get distinct countries from the customers table.
SELECT DISTINCT country FROM customers; 

-- Get all the records from the table customers where the customer_id starts with “BL”.
SELECT * FROM customers WHERE customer_id LIKE 'BL%'; 

-- Get the first 100 records of the orders table.
SELECT * FROM orders LIMIT 100; 

-- Get all customers that live in the postal codes 1010, 3012, 12209, and 05023.
SELECT * FROM customers WHERE postal_code IN ('1010', '3012', '12209', '05023'); 

-- Get all orders where the ShipRegion is not equal to NULL.
SELECT * FROM orders WHERE ship_region IS NOT NULL; 

-- Get all customers ordered by the country, then by the city.
SELECT * FROM customers ORDER BY country, city; 

-- Add a new customer to the customers table. You can use whatever values/
INSERT INTO customers(customer_id, company_name, contact_name, contact_title, address, city, region, postal_code, country, phone, fax)
VALUES ('YANGE', 'Yang Ella', 'Jamie Yang', 'Owner', '123 North Drive', 'Ann Arbor', 'MI', '1234', 'USA', '123-123-1234', null);

-- Update all ship_region to the value 'EuroZone' in the orders table, where the ship_country is 'France'.  
UPDATE orders SET ship_region = 'EuroZone' WHERE ship_country = 'France';

-- Delete all rows from order_details that have a quantity of 1. 
DELETE FROM order_details WHERE quantity = 1;

-- Calculate the average, max, and min of the quantity in the order_details table.
SELECT AVG(quantity) AS AVG_Quantity, MAX(quantity) AS MAX_Quantity, MIN(quantity) AS MIN_Quantity FROM order_details; 

-- Calculate the average, max, and min of the quantity in the order_details table, grouped by the order_id. 
SELECT AVG(quantity) AS AVG_Quantity, MAX(quantity) AS MAX_Quantity, MIN(quantity) AS MIN_Quantity FROM order_details GROUP BY order_id; 

-- Find the customer_id that placed order 10290 (orders table)
SELECT customer_id FROM orders WHERE order_id = 10290;

-- Do an inner join, left join, right join on orders and customers tables.  (These are three separate queries, one for each type of join.)
SELECT * FROM orders JOIN customers ON customers.customer_id = orders.customer_id; 
SELECT * FROM orders LEFT JOIN customers ON customers.customer_id = orders.customer_id; 
SELECT * FROM orders RIGHT JOIN customers ON customers.customer_id = orders.customer_id; 

-- Use a join to get the ship_city and ship_country of all the orders which are associated with an employee who is in London.
SELECT orders.ship_country, orders.ship_city, employees.employee_id FROM orders JOIN employees ON employees.employee_id = orders.employee_id WHERE employees.city = 'London'; 

-- Use a join to get the ship_name of all orders that include a discontinued product. (See orders, order_details, and products. 1 means discontinued.)
SELECT orders.ship_name FROM order_details JOIN orders ON orders.order_id = order_details.order_id JOIN products ON products.product_id = order_details.product_id WHERE products.discontinued = 1; 

-- Get first names of all employees who report to no one.
SELECT first_name FROM employees WHERE reports_to IS NULL; 

-- Get first names of all employees who report to 'Andrew'.
SELECT first_name FROM employees WHERE reports_to = 2; 

-- Write an SQL command to create an index on the CustomerID column in the Customers table.
CREATE INDEX created_index ON customers (customer_id); 
