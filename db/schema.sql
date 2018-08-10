
DROP TABLE Gear_Inventory;
DROP TABLE Gear_Category;
DROP TABLE Gear_Type;
DROP TABLE Users;


CREATE TABLE Users (
	user_id SERIAL NOT NULL,
	first_name character varying(200),
	last_name character varying(200),
	gender character varying(1),
	login TIMESTAMPTZ DEFAULT Now(),
	PRIMARY KEY (user_id)
);

INSERT INTO Users
	(first_name, last_name, gender)
VALUES
	('Bruce', 'Harvey', 'M'),
	('Flip', 'Wilson', 'M'),
	('Sarah', 'Lee', 'F');


CREATE TABLE Gear_Inventory (
    inv_id SERIAL NOT NULL,
    name character varying(200),
    gender character varying(1),
    image character varying(2083),
    weight numeric(5,2),
    type_name character varying(200),
    cat_name character varying(200),
    user_id INTEGER REFERENCES Users(user_id),
    PRIMARY KEY(inv_id)
);


COPY Gear_Inventory (name, gender, image, weight, type_name, cat_name, user_id) 
    FROM '/Users/elizabethdamato/Documents/digitalcrafts/capstone/react-shakedown-app/db/Gear_Inventory.csv' 
    DELIMITER ',' 
    CSV HEADER
;



CREATE TABLE Gear_Category (
    cat_id SERIAL NOT NULL,
    cat_name character varying(200),
    PRIMARY KEY(cat_id)
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
    type_id SERIAL NOT NULL,
    cat_id INTEGER,
    type_name character varying(200),
	PRIMARY KEY(type_id)
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
    (2, 'Under Garments'),
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

SELECT inv_id, g.user_id

INTO Users_Gear

FROM Gear_Inventory g

LEFT JOIN Users u

ON g.user_id = u.user_id;