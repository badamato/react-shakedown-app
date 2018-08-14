//DEPENDENCIES
const pg = require("pg");
const pgp = require("pg-promise")();

//ENVIRONMENTAL VARIABLES
const cn = {
  host: "localhost",
  port: 5432,
  database: "shakedown",
  user: "postgres",
  password: ""
};

const db = pgp(cn);
const bcrypt = require('bcrypt');

//USER AUTHENTICATE+++++++++++++++++
function createUser(email, password) {
  let hash = bcrypt.hashSync(password, 10);
  console.log(hash);
  return db.one("insert into users (email, password) values ('$1#', '$2#') returning user_id", [email, hash]);
}
// createUser('milla', 'mow')
//   .then((data) => { console.log(data); })
//   .catch((error) => { console.log(error); });

function getUser(email) {
  return db.oneOrNone("select * from users where email='$1#'", [email]);
}
// getUser('milla')
//   .then((data) => { console.log(data); })
//   .catch((error) => { console.log(error); });

function authenticateUser(username, password) {
  return getUser(username)
          .then((user) => {
            return bcrypt.compareSync(password, user.password_hash)
          })
          .catch((error) => false);

}
// authenticateUser('milla', 'mow')
//   .then((data) => { console.log(data); })
//   .catch((error) => { console.log(error); });




//SHOW++++++++++++++++++++++++++++++++

function showAllCategories() {
  return db.any(`SELECT * FROM Gear_Category`);
}
// showAllCategories()
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

function showOneCategory(cat_id) {
  return db.oneOrNone(`SELECT * FROM Gear_Category where cat_id= $1`, [cat_id]);
}
// showOneCategory(2)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

function showAllCatTypes(cat_id) {
  return db.any(`SELECT * FROM Gear_Type WHERE cat_id=$1`, [cat_id]);
}
// showAllCatTypes(2)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});


function showAllOfaType(type_id) {
  return db.any(`SELECT name, weight, image FROM Gear_Inventory WHERE  type_id=$1`, [
    type_id
  ]);

}

// showAllOfaType(8)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

function showAllMyGear(user_id) {
  return db.any(`
  SELECT * FROM gear_inventory WHERE inv_id in (SELECT inv_id from users_gear WHERE user_id = $1)`, [user_id]);
}
// showAllMyGear(2)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

function showTotalGearWeight(user_id) {
  return db.any(`SELECT weight FROM Gear_Inventory WHERE user_id=$1`, [
    user_id
  ]);
}

// showTotalGearWeight(3)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

//ADD++++++++++++++++++++++++++++++++
function addMyGearRecord(
  user_id,
  name,
  gender,
  image,
  weight,
  type_id,
  cat_id
) {
  // console.log(user_id)
  // console.log(name)
  // console.log(gender)
  // console.log(image)
  // console.log(weight)
  // console.log(type_id)
  // console.log(cat_id)
  
  return db
    .one(
      `INSERT INTO Gear_Inventory (name, gender, image, weight, type_id, cat_id) VALUES ('$1#', '$2#', '$3#', '$4#', $5, $6) returning inv_id`,
      [name, gender, image, weight, type_id, cat_id]
    )
    .then(data => {
      return db.one(
        `INSERT INTO Users_Gear (user_id, inv_id) VALUES ($1, $2) returning inv_id`,
        [user_id, data.inv_id]
      );
    });
}
// addMyGearRecord(400, 'ABC Backpack 40', 'F', 'https://cdn-images-1.medium.com/max/800/1*pvfDpHBsI1suLSOYR2cO3g.png', '10.60', 'Backpack', 'Essentials')
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

//DELETE++++++++++++++++++++++++++++++++
function deleteMyGearRecord(inv_id) {
  return db.result(`DELETE FROM users_gear WHERE inv_id = $1`, [inv_id])
}
// deleteMyGearRecord(284)
//   .then((data) => {console.log(data);})
//   .catch((error) => {console.log(error);});

//UPDATE++++++++++++++++++++++++++++++++
function updateGearWeight(newWeight, inv_id, user_id) {
  return db.result(
    `update Gear_Inventory set weight='$1' where inv_id=$2 and user_id=$3`,
    [newWeight, inv_id, user_id]
  );
}
// updateMyGear(5.55, 77, 2)
//   .then((data) => { console.log(data); })
//   .catch((error) => { console.log(error); });

module.exports = {
  createUser,
  getUser,
  authenticateUser,
  showAllCategories,
  showOneCategory,
  showAllCatTypes,
  showAllOfaType,
  showAllMyGear,
  showTotalGearWeight,
  addMyGearRecord,
  deleteMyGearRecord,
  updateGearWeight
};
