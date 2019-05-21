import React from 'react';
import logo from './logo.svg';
import homeImage from './homeImage.JPG';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import ButtonAppBar from './ButtonAppBar'



const styles = {
  image: {
    width: '99rem',
    height: '45rem',
  }
};
function App(props) {
  
  const { classes } = props;

  return (
    <div className="App">
      <ButtonAppBar />
      <img src={homeImage} alt="home-image" className={classes.image}/>
          <h4> Welcome to Parth Tiwari Photography  </h4>
    </div>
  );
}

export default withStyles(styles)(App);