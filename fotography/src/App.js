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
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};
function App(props) {
  
  const { classes } = props;

  return (
    <div className="App">
      <ButtonAppBar />


/**
This needs to change  */
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      
      {/* <Button variant="outlined" color="#ffffff" className={classes.button}>
        Gallery
      </Button> */}
          <h4>   </h4>
    </div>
  );
}

export default withStyles(styles)(App);