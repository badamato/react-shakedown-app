DROP TABLE Inventory;
DROP TABLE Categories;


CREATE TABLE Inventory (
    inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    gear_type character varying(50),
    category character varying(50)
);

CREATE TABLE Category (
    cat_id SERIAL PRIMARY KEY,
    cat_name character varying(200)
);

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    first_name character varying(200),
    last_name character varying(200),
    gender character varying(1),
    created_at timestamptz NOT NULL DEFAULT now()
);

COPY Inventory (name, gender, image, weight, gear_type, category) 
    FROM '/Users/elizabethdamato/Documents/digitalcrafts/capstone/react-shakedown-app/db/Gear_Inventory.csv' 
    DELIMITER ',' 
    CSV HEADER
;

INSERT INTO Category
    (cat_name)
VALUES
    ('Essentials'),
    ('Clothing'),
    ('Footwear'),
    ('Optional')
;

INSERT INTO Users
    (first_name, last_name, gender)
VALUES
    ('Bruce', 'Schootz', 'M'),
    ('Sarah', 'Lee', 'F'),
    ('Gabe', 'LaFave', 'M'),
    ('Kinder', 'Bustle', 'F'),
    ('Gretel', 'Foxtrot', 'F')
;

select * from Inventory;
select * from Category;