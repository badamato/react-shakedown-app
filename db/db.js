//DEPENDENCIES
const pg = require('pg');
const pgp = require('pg-promise')();

//ENVIRONMENTAL VARIABLES
const cn = {
  host: 'localhost',
  port: 5432,
  database: 'shakedown',
  user: 'postgres',
  password: ''
};

const db = pgp(cn);

//SHOW++++++++++++++++++++++++++++++++


function showAllCategories() {
  return db.any(`SELECT * FROM Gear_Category`)
}

// showAllCategories()
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});


function showOneCategory(cat_id) {
  return db.oneOrNone(`SELECT * FROM Gear_Category where cat_id= $1`, [cat_id])
}

// showOneCategory(2)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});


function showAllCatTypes(cat_id) {
  return db.any(`SELECT * FROM Gear_Type WHERE cat_id=$1`, [cat_id])
}

showAllCatTypes(2)
  .then((data) => {console.log(data);})
  .catch((error) => {console.log(error);});