import React, { Component } from "react";
import API from "../../utils/API";
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

class Attendees extends Component {
  state = {
    eventID: this.props.id,
    SquadMates: []
  };
  // componentDidMount = () => {
  //     this.loadSquad(this.state.eventID);
  // }
  // loadSquad = eventID => {
  //     API.getInterested(eventID)
  //     .then(res =>
  //         console.log(res)
  //         // this.setState({SquadMates: res.data})
  //     ).catch(err => console.log(err));
  // }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            #PotentialSquad
          </Typography>
          <Typography component="p">
            {this.state.SquadMates.length ? (
              <div>
                {this.state.SquadMates.map(Squad => (
                  <div>{Squad.username}</div>
                ))}
              </div>
            ) : (
              <div>Nobody Users Currently Planning on Attending</div>
            )}
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Attendees);
