import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    fontFamily: 'Black Ops One',
    fontSize: '50px',
    color: '#F2EFEF',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#F2EFEF',
  },
  button: {
    color: '#F2EFEF',
},
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#030303'}}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.grow}>
          Parth Tiwari
          </Typography>
          <Button className={classes.button}>Nature</Button>
          <Button className={classes.button}>Architecture</Button>
          <Button className={classes.button}>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);