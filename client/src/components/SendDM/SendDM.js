import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SendButton from "../Buttons/SendButton"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
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
        <Grid container spacing={12}>
          <Grid item xs={9}>
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                id="outlined-full-width"
                label="Your Message Here"
                style={{ margin: 8 }}
                placeholder=""
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
          </Grid>
          <Grid item xs={3}>
            <SendButton buttonText="#SlideIntoDMs"/>
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
