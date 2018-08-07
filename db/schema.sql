DROP TABLE Gear_Inventory;
DROP TABLE Gear_Category;
DROP TABLE Gear_Type;
DROP TABLE temp;

CREATE TABLE temp (
	inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    type_name character varying(200),
    cat_name character varying(200)
);

COPY temp (name, gender, image, weight, type_name, cat_name) 
    FROM '/Users/elizabethdamato/Documents/digitalcrafts/capstone/react-shakedown-app/db/Gear_Inventory.csv' 
    DELIMITER ',' 
    CSV HEADER
;

CREATE TABLE Gear_Type (
    type_id SERIAL PRIMARY KEY,
	type_name character varying(200)
);

CREATE TABLE Gear_Category (
    cat_id SERIAL PRIMARY KEY,
    cat_name character varying(200)
);

CREATE TABLE Gear_Inventory (
    inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    type_id INTEGER REFERENCES Gear_Type(type_id),
	cat_id INTEGER REFERENCES Gear_Category(cat_id)
);

INSERT INTO Gear_Inventory
SELECT inv_id::int, name, gender, image, weight
FROM temp;

DELETE FROM temp;