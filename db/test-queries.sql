--CATEGORIES++++++++++++++++

-- get all the categories
SELECT * FROM Gear_Category;


-- get one category by id
SELECT * FROM Gear_Category WHERE cat_id=2;


-- get all types (in a single category)
SELECT * from Gear_Types WHERE cat_id=1;

