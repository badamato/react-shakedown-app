--CATEGORIES++++++++++++++++

-- get all the categories
SELECT * FROM Gear_Category;


-- get one category by id
SELECT * FROM Gear_Category WHERE cat_id=2;


-- get all types (in a single category)
SELECT * from Gear_Types WHERE cat_id=1;


-- add a new user entry/card into inventory
INSERT INTO Gear_Inventory (name, gender, image, weight, type_name, cat_name) VALUES ('ABC Backpack 40', 'F', 'https://cdn-images-1.medium.com/max/800/1*pvfDpHBsI1suLSOYR2cO3g.png', '10.60', 'Backpack', 'Essentials') returning inv_id;

-- delete an user entry/card from inventory
DELETE FROM Gear_Inventory WHERE inv_id = 284;


-- update an user entry/card in inventory


-- show all entries in inventory by a particular user
SELECT * FROM Gear_Inventory WHERE user_id=2;

