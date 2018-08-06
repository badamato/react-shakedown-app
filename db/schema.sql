DROP DATABASE shakedown

CREATE DATABASE shadedown

CREATE TABLE Inventory (
    inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    gear_type character varying(50),
    category character varying(50)
);

CREATE UNIQUE INDEX Inventory_pkey ON Inventory(inv_id int4_ops)

select * from Inventory;