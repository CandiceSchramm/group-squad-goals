import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RedOutlinedButton from "../Buttons/RedOutlinedButton";
import BlueOutlinedButton from "../Buttons/BlueOutlinedButton"



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid
          container
          spacing={16}
          direction="row"
          justify="center"
        >
          <Grid item xs={12}>
            <Typography variant="subheading" component="h3">
              Req's Name
            </Typography>
          </Grid>
          <Grid item xs={12} />
          <BlueOutlinedButton buttonText="Accept"/>
          <RedOutlinedButton buttonText="Delete"/>
        </Grid>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
