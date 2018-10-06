import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import API from '../../utils/API';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit,
    },
  });
  
  function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }
  
  function AttendeeChip(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <Link to={`/profile/${props.profileLink}`}>
          <Chip
            avatar={
              <Avatar>
                <FaceIcon />
              </Avatar>
            }
            label={props.attendee}
            className={classes.chip}
          />
        </Link>  
      </div>
    );
  }
  
  AttendeeChip.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AttendeeChip);