import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#673ab7"
    },
    secondary: {
      main: "#ff9100"
    }
  }
});

function SendDM(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={8}>
          <Grid item xs={6}>
            <Input
              placeholder="Type Your Message Here"
              disableUnderline
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </Grid>
          <Grid item xs={2}>
          {/* button goes here */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

SendDM.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SendDM);
