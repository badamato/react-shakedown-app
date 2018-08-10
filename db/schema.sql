DROP TABLE Gear_Inventory;
DROP TABLE Gear_Category;
DROP TABLE Gear_Type;



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
    FROM './Gear_Inventory.csv' 
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
    ('Backpack'),
    ('Shelter'),
    ('Sleeping Bag'),
    ('Sleeping Pad'),
    ('Stove'),
    ('Cookware'),
    ('Water Filter'),
    ('Water Bottle/Reservoir'),
    ('Headlamp'),
    ('Navigation'),
    ('First Aid'),
    ('Repair Kit'),
    ('Other Essentials'),
    ('Top Baselayer'),
    ('Bottom Baselayer'),
    ('Undergarments'),
    ('Bottoms'),
    ('Tops'),
    ('Outerwear Clothing'),
    ('Boots/Shoes Footwear'),
    ('Socks'),
    ('Tools'),
    ('Outerwear Optional'),
    ('Sacks'),
    ('Boots/Shoes Optional'),
    ('Other Optional'),
    ('Personal'),
    ('Sleeping')
;