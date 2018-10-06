import React, { Component } from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AttendeeChip from "./AttendeeChip"

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Attendees extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            #PotentialSquad
          </Typography>
            {this.props.squad.length > 0 ? (
              <div>
                {console.log(this.props.squad)}
                {this.props.squad.map(squad => (
                  <AttendeeChip
                  attendee={squad.name}
                  profileLink={squad._id}
                  >

                  </AttendeeChip>
                ))}
              </div>
            ) : (
              <div>Nobody Users Currently Planning on Attending</div>
            )}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Attendees);
