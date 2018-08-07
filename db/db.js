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
