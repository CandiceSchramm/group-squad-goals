import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PurpleButton from '../Buttons/PurpleButton';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 0
  },
});

function UserInfo(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <ListItemText primary="User's Name">
          </ListItemText>
          <PurpleButton buttonText="#requestDigits"></PurpleButton>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="About Me" />
        </ListItem>
      </List>
      
    </div>
  );
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfo);
