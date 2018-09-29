import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SenderCard from "./SenderCard"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function DmThreads(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          #SquadChat
        </Typography>
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <SenderCard />
          </Grid>
          <Grid item xs={12}>
            <SenderCard />
          </Grid>
          <Grid item xs={12}>
            <SenderCard />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

DmThreads.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DmThreads);
