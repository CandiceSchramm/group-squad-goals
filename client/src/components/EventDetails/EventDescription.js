import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function EventDescription(props) {
  const { classes } = props;
  return (

  <div>
    <Paper className={classes.root} elevation={1}>
      <Typography variant="headline" component="h3">
        {props.title ? (
          <div>{props.title}</div>
        ) : (
          <div>No title abalible avalible at this time</div>
        )}
      </Typography>
      <Typography component="p">
        {props.description ? (
          <div>{props.description}</div>
        ) : (
          <div>No description avalible at this time</div>
        )}
      </Typography>
    </Paper>
  </div>
  )};

EventDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventDescription);
