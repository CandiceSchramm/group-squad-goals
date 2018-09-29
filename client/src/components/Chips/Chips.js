import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

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

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function OutlinedChips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip label="Concerts" className={classes.chip} variant="outlined" />
      <Chip label="Festivals" className={classes.chip} variant="outlined" />
      <Chip label="Preforming" className={classes.chip} variant="outlined" />
      <Chip label="Movies" className={classes.chip} variant="outlined" />
      <Chip label="Films" className={classes.chip} variant="outlined" />
      <Chip label="Comedy" className={classes.chip} variant="outlined" />
      <Chip label="Nightlife" className={classes.chip} variant="outlined" />
      <Chip label="Campus" className={classes.chip} variant="outlined" />
      <Chip label="Networking" className={classes.chip} variant="outlined" />
      <Chip label="Education" className={classes.chip} variant="outlined" />
      <Chip label="Galleries" className={classes.chip} variant="outlined" />
      <Chip label="Literary" className={classes.chip} variant="outlined" />
      <Chip label="Museums" className={classes.chip} variant="outlined" />
      <Chip label="Science" className={classes.chip} variant="outlined" />
      <Chip label="Sports" className={classes.chip} variant="outlined" />
      <Chip label="Outdoors" className={classes.chip} variant="outlined" />
      <Chip label="Pets" className={classes.chip} variant="outlined" />
      <Chip label="Neighborhood" className={classes.chip} variant="outlined" />
      <Chip label="Spirituality" className={classes.chip} variant="outlined" />
      <Chip label="Organziations" className={classes.chip} variant="outlined" />
    </div>
  );
}

OutlinedChips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedChips);
