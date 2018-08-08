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
    FROM '/Users/elizabethdamato/Documents/digitalcrafts/capstone/react-shakedown-app/db/Gear_Inventory.csv' 
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
    cat_id INTEGER,
    type_name character varying(200)
);


INSERT INTO Gear_Type
    (cat_id, type_name)
VALUES
    (1, 'backpack'),
    (1, 'shelter'),
    (1, 'sleepingBag'),
    (1, 'sleepingPad'),
    (1, 'stove'),
    (1, 'cookware'),
    (1, 'waterFilter'),
    (1, 'waterBottleReservoir'),
    (1, 'headlamp'),
    (1, 'navigation'),
    (1, 'firstAid'),
    (1, 'repairKit'),
    (1, 'otherEssentials'),
    (2, 'topBaselayer'),
    (2, 'bottomBaselayer'),
    (2, 'undergarments'),
    (2, 'bottoms'),
    (2, 'tops'),
    (2, 'outerwearClothing'),
    (3, 'bootsShoesFootwear'),
    (3, 'socks'),
    (4, 'tools'),
    (4, 'outerwearOptional'),
    (4, 'sacks'),
    (4, 'bootsShoesOptional'),
    (4, 'otherOptional'),
    (4, 'personal'),
    (4, 'sleeping')
;

SELECT * FROM Gear_Type WHERE cat_id=2;

