import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



const styles = theme => ({
    
  root: {
    flexGrow: 1
  },
  paper: {
    marginRight: 30,
    marginLeft: 30,
    height: 900,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }
});

function Background(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}/>
    </div>
  );
}

Background.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);
