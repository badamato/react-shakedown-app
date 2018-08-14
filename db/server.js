//IMPORT EXPRESS
const express = require("express");
const app = express();

//IMPORT body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//IMPORT db.js
const shakedown = require("./db");

//USE Public folder for styles
const static = express.static;
app.use(static("public"));

// ********* BUILD A  PACK ROUTES ************** //

//////////////////////Build-A-Pack: ROUTE TO GET ALL CATEGORIES
app.get("/api/BAP/categories", (req, res) => {
  // get all the catagories
  shakedown
    .showAllCategories()
    .then(data => {
      res.send(data);
    })

    .catch(error => {
      console.log(error);
    });
});

////////////Build-A-Pack: ROUTE TO GET ONE CATEGORY IN Gear_Category
app.get("/api/BAP/categories/:category", (req, res) => {
  // res.send('Got a category')
  shakedown
    .showOneCategory(req.params.category)
    .then(data => {
      // console.log(data);
      res.send(data);
    })

    .catch(error => {
      console.log(error);
    });
});

///////////Build-A-Pack: ROUTE TO GET ALL TYPES IN ONE CATEGORY
app.get("/api/BAP/categories/:category/geartypes", (req, res) => {
  // res.send('Got a type of gear')
  shakedown
    .showAllCatTypes(req.params.category)
    .then(data => {
      console.log(data);
      res.send(data);
    })

    .catch(error => {
      console.log(error);
    });
});

//////////Practice
// app.get("/api/BAP/categories/:category/:geartypes", (req, res) => {
//   shakedown
//     .showAllCatTypes(req.params.category)
//     .then(data => {
//       console.log(data);
//       let cat_id = data[0].cat_id;
//       let gear_id = data[0].type_id;

//       console.log(cat_id);
//       console.log(gear_id);
//       shakedown.showAllOfaType(cat_id, gear_id)
//       .then(data => {
//         console.log(data)
//     })
//   .then((data)=> {
//       res.send(data);
//     })

//       })

//////////////// ROUTE FROM HELL ////////////////////
///////////Build-A-Pack: ROUTE TO GET ALL OF A SINGLE TYPE IN A CATEGORY

app.get("/api/BAP/geartype/:geartype", (req, res) => {
  shakedown
    .showAllOfaType(req.params.geartype)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

// *********** MY GEAR ROUTES ******************** //

/////My-Gear-Page: ROUTE TO GET ALL OF MY GEAR
app.get("/api/:user_id/mygear", (req, res) => {
  // res.send('Got the weight of my piece of gear')
  shakedown
    .showAllMyGear(req.params.user_id)

    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

/////////////////My-Gear-Page: ROUTE TO ADD MY INITIAL GEAR RECORD
// `http://10.150.50.222:3500/api/3/addRecord`
app.post("/api/:user_id/addmygear", (req, res) => {
  // res.send('Got my record')
  // open the package, pass it to addMyGearRecord form
  console.log(req.body);
  let user_id = req.body.user_id;
  let name = req.body.name;
  let gender = req.body.gender;
  let image = req.body.image;
  let weight = req.body.weight;
  let type_name = req.body.type_name;
  let cat_name = req.body.cat_name;

  shakedown
    .addMyGearRecord(user_id, name, gender, image, weight, type_name, cat_name)
    .then(data => {
      console.log(data);
      res.send(data);
      
    })
    .catch(error => {
      console.log(error);
    });
});

////////////////My-Gear-Page: ROUTE TO DELETE A PIECE OF MY GEAR
app.get("/api/:user_id/deletemygear", (req, res) => {
  // res.send('This is my inventory card to delete')
  //get one record from inventory (stamped with user_id)
  let user_id = req.params.user_id;

  shakedown
    .showAllMyGear(user_id)
    .then(data => {
      // res.render("my-gear-page", data);
      res.send(data)
    })
    .catch(error => console.log(error));
});

//delete the record
app.post("/api/:user_id/deletemygear", (req, res) => {
  // res.send('You deleted it!')
  console.log(req.body)
  let inv_id = req.body.inv_id;

  shakedown
    .deleteMyGearRecord(inv_id)
    .then(data => {
      // res.redirect(`/api/${inv_id}`);
    res.send("you deleted it!")
    })

    .catch(error => {
      console.log(error);
    });
});

/////My-Gear-Page: ROUTE TO UPDATE ALL INPUT FIELDS ON ONE PIECE OF MY GEAR
app.post("/api/:user_id/mygear", (req, res) => {
  // open the package, pass it to addMyGearRecord form
  let user_id = req.body.user_id;
  let name = req.body.name;
  let gender = req.body.gender;
  let image = req.body.image;
  let weight = req.body.weight;
  let type_name = req.body.type_name;
  let cat_name = req.body.cat_name;

  shakedown
    .addMyGearRecord(user_id, name, gender, image, weight, type_name, cat_name)
    .then(data => {
      console.log(data);
      res.send(data);
      // res.redirect(`/api/${rec.body.user_id}/mygear`);
    })
    .catch(error => {
      console.log(error);
    });
});


// cookie-parser lets us access cookies in the browser
const cookieParser = require('cookie-parser');
app.use(cookieParser());


// And now, set up sessions so we can track a logged-in user
const session = require('express-session');
app.use(session({
  key: 'user_sid',
  secret: 'ldfhgosdhgoushdfglahdflajsd',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 600000
  }
}));

app.post('/api/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  shakedown.authenticateUser(email, password)
    .then(isValid => {
      if (isValid) {
        shakedown.getUser(email)
          .then(u => {
            req.session.user = u.user_id;
            console.log(`Your user id is ${u.user_id}`);
            // res.redirect('/');
            res.json({status: 'okay'})
          })
      } else {
        console.log('your credentials no good!');
        // res.redirect('/login');
        res.json({status: 'not okay'})
      }
    })
  // res.send('yeah, you logged in');
});

// app.get('/signup', (req, res) => {
//   res.render('signup-page');
// });

app.post('/api/signup', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let password2 = req.body.password2;

  console.log(email);
  console.log(password);
  console.log(password2);
  shakedown.getUser(email)
    .then(user => {
      console.log(user);
      if (user) {
        console.log('found that user');
        // res.send('that punk already exists');
        res.json({status: 'taken'})
      } else if (password === password2) {
        console.log('passwords matched');
        shakedown.createUser(email, password)
          .then(u => {
            console.log(u);
            req.session.user = u.user_id;
            console.log(`Your user id is ${u.user_id}`);
            // res.redirect('/');
            res.json({status: 'okay'})
            // res.send(`Your user id is ${u.id}`);
          })
          .catch(err => {
            res.send(err);
          })
      } else {
        console.log('passwords no matchy');
        res.json({status: 'not okay'});
      }
    })

  // res.send('yeah, you signed up');
});





app.listen(3500, () => {
  console.log("The server is running on: 3500!");
});
