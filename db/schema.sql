
DROP TABLE Gear_Inventory CASCADE;
DROP TABLE Gear_Category CASCADE;
DROP TABLE Gear_Type CASCADE;
DROP TABLE Users CASCADE;
DROP TABLE Users_Gear CASCADE;


CREATE TABLE Users (
	user_id SERIAL PRIMARY KEY,
	first_name character varying(200),
	last_name character varying(200),
	gender character varying(1),
	login TIMESTAMPTZ DEFAULT Now()
);


INSERT INTO Users
	(first_name, last_name, gender)
VALUES
	('Bruce', 'Harvey', 'M'),
	('Flip', 'Wilson', 'M'),
	('Sarah', 'Lee', 'F');


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
    (1, 'Backpack'),
    (1, 'Shelter'),
    (1, 'Sleeping Bag'),
    (1, 'Sleeping Pad'),
    (1, 'Stove'),
    (1, 'Cookware'),
    (1, 'Water Filter/Purifier'),
    (1, 'Water Bottle/Reservoir'),
    (1, 'Headlamp'),
    (1, 'Navigation'),
    (1, 'First Aid'),
    (1, 'Repair Kit'),
    (1, 'Other Essentials'),
    (2, 'Top Baselayer'),
    (2, 'Bottom Baselayer'),
    (2, 'Undergarments'),
    (2, 'Bottoms'),
    (2, 'Tops'),
    (2, 'Outerwear Clothing'),
    (3, 'Boots/Shoes Footwear'),
    (3, 'Socks'),
    (4, 'Tools'),
    (4, 'Outerwear Optional'),
    (4, 'Sacks'),
    (4, 'Boots/Shoes Optional'),
    (4, 'Other Optional'),
    (4, 'Personal'),
    (4, 'Sleeping')
;


CREATE TABLE Gear_Inventory (
    inv_id SERIAL PRIMARY KEY,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    type_id INTEGER REFERENCES gear_type(type_id),
    type_name character varying(200),
    cat_id INTEGER REFERENCES gear_category(cat_id),
    cat_name character varying(200),
    user_id INTEGER REFERENCES users(user_id)
);


COPY Gear_Inventory (name, gender, image, weight, type_name, cat_name, user_id) 
    FROM '/Users/elizabethdamato/Documents/digitalcrafts/capstone/react-shakedown-app/db/Gear_Inventory.csv' 
    DELIMITER ',' 
    CSV HEADER
;


-- set the type_id based on the type_names
update gear_inventory
set type_id=gear_type.type_id
from gear_type
where gear_inventory.type_name=gear_type.type_name;



-- set the cat_id based on the cat_names
update gear_inventory
set cat_id=gear_category.cat_id
from gear_category
where gear_inventory.cat_name=gear_category.cat_name;



SELECT inv_id, g.user_id

INTO Users_Gear

FROM Gear_Inventory g

LEFT JOIN Users u

ON g.user_id = u.user_id;
