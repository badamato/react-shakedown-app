# Shakedown

<p align='center'>
    <img src='readme_imgs/one.png' alt='homepage'></img>
</p>

# [Live Demo](http://www.gearshakedown.net/)


## Our Mission:
At Shakedown, we are all about helping you get outside, faster. Whether you're brand new to hiking or you're seasoned hiker trash (an embraced term given to thru-hikers), we want to help you keep track of your gear and lighten the load you carry. You’ll be surprised how much pack weight can effect your backpacking experience.  Check out some of our suggested checklists for different hikes. Keep inventory of the gear you already own. Mix and match your gear in our “Build your pack” feature, and see how much your pack weighs.

Pack it up. Shake it down. Get outside.    


## Built by:

[Aylin DeBruyne](https://github.com/adebruyne)  
Contributions: React/JavaScript, Node.js and Express Routing, UI/UX Responsive Design, README.md

[Beth D'Amato](https://github.com/badamato)  
Contributions: PostgreSQL Database Management, Querying User Preferences, AWS Deployment/Management, README.md, Trello Project Board


## Built with:

* React
* Node.js
* Express
* PostgreSQL 
* JavaScript
* Bootstrap
* Nginx
* Amazon Web Services Elastic Compute Cloud

<p align='center'>
    <img src='readme_imgs/#' alt='#'></img>
</p>


## Project Whiteboarding

<p align='center'>
    <img src='readme_imgs/trello.png' alt='project dashboard'></img>
</p>



## Minimum Viable Product:
**User story:**  All users are able to access the application's main page and the Gear Checklists page.  An authenticated user can further access the My Gear section where they are able to inventory what hike gear they currently own in order to find out what each piece weighs.  An authenticated user can move onto the the Build-A-Pack feature to add or delete items of gear in order to determine current weight.


## Obstacles and Breakthroughs

*Obstacle One -*
    Understanding the relationship between components, state and and props was the hardest initial challenges. After building all the different components, we had to go back review which component was passing props to others and which ones had to keep track of state. Being new to React, all these moving pieces made it difficult to wrap our heads around. As we began building the weight component on the build-a-pack feature, everything started to click. The concepts of passing props and managing state became clearer.
    
```
        {/* Navigation */}
          
          <Route path="/" component={Navigation}/>
          
        {/* Total Weight */}
          <Route
            path="/buildapack"
            render={props => {
              return (
                <TotalWeight
                  chosenGear={this.state.selectedGear}
                  clearWeight={this._clearWeight}
                  removeOneGear={this._removeGearItem}
                  {...props}
                />
              );
            }}
          />

```

*Breakthrough One -*
    Once the backend had been all wired up, it was time to get axios to get to work. Understanding how the frontend and backend "exchanged" information via axios was a little confusing at first- especially with all the different routes we wanted to have control of. We kept confusing our frontend routes and backend routes when making our axios requests. Our mentor was able to clearly explain the "life-cycle" of axios to us through lots of drawings and analogies. When we wired up the two, and we got our first bit of data from the database rendered to the page, we were ecstatic. It made building the other routes a lot quicker and clearer. There still is some work that needs to be cleaned up, but we were pleased with the first version.
    
```
 handleGearDelete = gear => {
    console.log(gear);
    let inv_id = gear;

    axios.post("/api/1/deletemygear", { inv_id }).then(res => {
      console.log(res);
      this._getMyGear();
    });
  };
  componentDidMount() {
    this._getMyGear();
    console.log("WOOOO get that");
  }
  _getMyGear = () => {
    //make an AJAX request to API and retrieve all categories and render array to page
    // axios.get("/api/:user_id/mygear")
    axios.get("/api/1/mygear").then(res => {
      console.log(res);
      this.setState({
        myGear: res.data
      });
    });
  };
```

*Obstacle Two -*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend enim at nunc aliquam, dapibus sodales libero malesuada. Maecenas non convallis arcu, quis molestie mi. Sed volutpat dignissim laoreet. Vestibulum lacinia faucibus pellentesque. Nullam et convallis mi, in rhoncus nisl. Suspendisse pretium, leo id venenatis porttitor, nulla libero sollicitudin elit, vel condimentum nisl lectus eu odio. Suspendisse in dictum mi, nec iaculis erat. Morbi eget tristique tortor. Nunc laoreet hendrerit lobortis. Nullam convallis commodo tellus, non efficitur ex finibus id.
```
add code snippet here
```

*Breakthrough One -*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend enim at nunc aliquam, dapibus sodales libero malesuada. Maecenas non convallis arcu, quis molestie mi. Sed volutpat dignissim laoreet. Vestibulum lacinia faucibus pellentesque. Nullam et convallis mi, in rhoncus nisl. Suspendisse pretium, leo id venenatis porttitor, nulla libero sollicitudin elit, vel condimentum nisl lectus eu odio. Suspendisse in dictum mi, nec iaculis erat. Morbi eget tristique tortor. Nunc laoreet hendrerit lobortis. Nullam convallis commodo tellus, non efficitur ex finibus id.
```
add code snippet here
```


## Future Additions

* users can save different packs they used for different trips
* users can see how their friends or others packed for certain trips
* pitch to Apple to deploy for use...
* add a contact or chat component so users can chat with us live for advice...
* run demonstration videos in side navigation...
* We would like to present Shakedown to interested outdoor, hiking, gear suppliers....



## License 
*Copyright 2018 Aylin DeBruyne, Beth D'Amato*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
