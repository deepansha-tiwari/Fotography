import React from 'react';
import logoPt from './logoPt.png';
import homeImage from './homeImage.JPG';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import IMG_0201 from './IMG_0201.jpg'
import IMG_0299 from './IMG_0299.JPG'
import IMG_6185 from './IMG_6185.JPG'
import IMG_0132 from './IMG_0132.JPG'
import IMG_2956 from './IMG_2956.jpg'
import temp from './temp.png'
import IMG_3666 from './IMG_3666.JPG'
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
    backgroundColor: '#A07GHT',
  },
  gridList: {
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
};
function App(props) {
  
  const { classes } = props;
  const tile = {
    author: 'Parth Tiwari'
  }
  return (
    <div className="App">
      <ButtonAppBar />

      <GridList cellHeight={450} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader style= {{backgroundColor: '#d1460a'}}>.</ListSubheader>
        </GridListTile>
        
          <GridListTile style= {{width: '710px'}}>  
            <img src={IMG_0299}/>
          
          </GridListTile>
          <GridListTile style= {{width: '870px'}}> 
            <img src={IMG_0201} />
          
          </GridListTile>
          <GridListTile style= {{width: '870px'}}> 
            <img src={IMG_3666} />
          
          </GridListTile>
          <GridListTile style= {{width: '710px'}}> 
            <img src={IMG_6185} />
          
          </GridListTile>

          <GridListTile style= {{width: '710px'}}>  
            <img src={IMG_0132}/>
          
          </GridListTile>
          <GridListTile style= {{width: '870px'}}> 
            <img src={IMG_2956} />
          
          </GridListTile>
          <GridListTile style= {{width: '870px'}}> 
            <img src={temp} />
          
          </GridListTile>
          <GridListTile style= {{width: '710px'}}> 
            <img src={homeImage} />
          
          </GridListTile> 
      </GridList>
      
      {/* <Button variant="outlined" color="#ffffff" className={classes.button}>
        Gallery
      </Button> */}
          <h4>   </h4>
    </div>
  );
}

export default withStyles(styles)(App);