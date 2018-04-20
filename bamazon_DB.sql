DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waffle Iron", "Kitchen Appliances", 20, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shower Curtain", "Bathroom", 10, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hungry Hippos", "Games", 10, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Sporting Goods", 100, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diamond Ring", "Jewelry", 1000, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sporting Goods", 10, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acoustic Guitar", "Instruments", 99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Note Pad", "Office Supplies", 3, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batteries", "Electronics", 9, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oversized Arm Chair", "Furniture", 999, 3);