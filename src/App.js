
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Card from "./components/event"
import image_alumni_lunch from "./images/alumni_lunch.jpg";
import image_bagels from "./images/bagels.jpg";
import image_frisbee from "./images/frisbee.jpg";
import image_trin from "./images/trin.jpg";





function App() {

  const data = [
    {title: 'Frisbee on the Lawn', description: 'Play frisbee with first-years.', image: image_frisbee},
    {title: '20% Off Bodos!', description: 'Meet at Bodos with a friend and get a 20% off coupon!', image: image_bagels},
    {title: 'Lunch with Alumni', description: 'Great networking opportunity to have lunch with a UVA alumni.', image: image_alumni_lunch},
    {title: 'Party @ Trin 3', description: 'Just be sure to wear a mask and stay 6ft apart! (also maybe just don\'t go)', image: image_trin},
  ]

  return (
    <div className="App">
      <AppBar position="static" style={{ height: 75, marginBottom: 75 }}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">
            Hoo's Down!
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {data.map(event => {
        return (
          <Card props={event}/>
        )
      })}
    </div>
  );
}

export default App;
