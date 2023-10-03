---
title: "Chapter 3: Intermediate SQL"
description: "Join queries, transactions, indices, constraints, and schemas."
---

## Join Expressions

The `JOIN` clause combines two tables based on their corresponding columns:

```sql
--- Retrieve all product orders.
SELECT
  `orders`.id as order_id,
  `products`.name as product_name,
  `products`.price,
  `orders`.created_at as order_date
FROM products
JOIN orders ON products.id = orders.product_id;
```

> Unlike a `FROM` clause with multiple tables that generates a cartesian product, 
> a `JOIN` clause in most cases requires a condition to filter records between 
> two tables.

### Join Types

There are a number of different JOIN types available in SQL, specifically:

#### Natural Join

Combines two tables based on their common attributes.

```sql
CREATE TABLE users (
  id         UNSIGNED INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name  VARCHAR(30)
);

CREATE TABLE accounts (
  id       UNSIGNED INT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  email    VARCHAR(128) NOT NULL,
);

SELECT 
  `users`.first_name,
  `users`.last_name,
  `employees`.salary
FROM `users` NATURAL JOIN `employees`
```

Here, the users table is joined with the accounts table based on their common 
attribute which is `id`.

The common attribute can also be specified using the `using` clause:

```sql
CREATE TABLE employees (
  id UNSIGNED INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  salary INT
);

CREATE TABLE departments (
  building_id INT PRIMARY KEY,
  name VARCHAR(30) PRIMARY KEY
);

SELECT 
  `employees`.first_name,
  `employees`.last_name,
  `employees`.salary,
  `departments`.name
FROM `employees` NATURAL JOIN `departments` USING building_id;
```

#### Inner Join

Combines two tables whose values must be present in both tables.

```sql
--- Retrieve all product orders.
SELECT 
  `orders`.id as order_id,
  `products`.name as product_name,
  `products`.price,
  `orders`.created_at as order_date
FROM `orders` INNER JOIN `product` ON `products`.id = `orders`.id;
```

If no JOIN type is specified then by default it is an `INNER JOIN` type.

#### Outer Join

Combines two tables whose values are either present in the leftmost (`LEFT OUTER JOIN`) or 
rightmost (`RIGHT OUTER JOIN`) or in both (`FULL OUTER JOIN`) tables regardless of no 
matching values.

In most SQL implementations, the `OUTER` keyword can be omitted.

If a record does not match, then the columns for those records are set to `NULL` ie. if 
no values are matched using the `LEFT JOIN` clause, then the columns of the table on the 
right-hand side of the clause are set to `NULL`.
