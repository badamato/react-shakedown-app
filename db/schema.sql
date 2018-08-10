DROP TABLE Gear_Inventory;
DROP TABLE Gear_Category;
DROP TABLE Gear_Type;
DROP TABLE inventory;


CREATE TABLE Gear_Inventory (
    inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    type_name character varying(200),
    cat_name character varying(200)
);


COPY Gear_Inventory (name, gender, image, weight, type_name, cat_name) 
    FROM '/Users/aylindebruyne/DigitalCrafts-2018-04/Final Project/shakedown-app/db/Gear_Inventory.csv' 
    DELIMITER ',' 
    CSV HEADER
;


CREATE TABLE Gear_Category (
    cat_id SERIAL PRIMARY KEY,
    cat_name character varying(200)
);

INSERT INTO Gear_Category
    (cat_name)
VALUES
    ('Essentials'),
    ('Clothing'),
    ('Footwear'),
    ('Optional')
;


CREATE TABLE Gear_Type (
    type_id SERIAL PRIMARY KEY,
    cat_id INTEGER REFERENCES Gear_Category(cat_id),
    type_name character varying(200)
);


INSERT INTO Gear_Type
    (type_name)
VALUES
    ('backpack'),
    ('shelter'),
    ('sleepingBag'),
    ('sleepingPad'),
    ('stove'),
    ('cookware'),
    ('waterFilter'),
    ('waterBottleReservoir'),
    ('headlamp'),
    ('navigation'),
    ('firstAid'),
    ('repairKit'),
    ('otherEssentials'),
    ('topBaselayer'),
    ('bottomBaselayer'),
    ('undergarments'),
    ('bottoms'),
    ('tops'),
    ('outerwearClothing'),
    ('bootsShoesFootwear'),
    ('socks'),
    ('tools'),
    ('outerwearOptional'),
    ('sacks'),
    ('bootsShoesOptional'),
    ('otherOptional'),
    ('personal'),
    ('sleeping')
;