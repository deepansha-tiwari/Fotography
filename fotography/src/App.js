import React from 'react';
import logoPt from './logoPt.png';
import homeImage from './homeImage.JPG';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    <Grid container>
    <img src={logoPt} alt="home-image" />
    </Grid>
      
      {/* <Button variant="outlined" color="#ffffff" className={classes.button}>
        Gallery
      </Button> */}
          <h4>   </h4>
    </div>
  );
}

export default withStyles(styles)(App);