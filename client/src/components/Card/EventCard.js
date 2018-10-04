import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import BlueOutlinedButton from '../Buttons/BlueOutlinedButton';
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

const styles = {
  card: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function AddtoDB(id) {
  API.addActivity({
    activityID: id
  })
    .then(res => { console.log(res) })
    .catch(err => console.log(err));
}

function ImgMediaCard(props) {
  const { classes } = props;
  let seeEvent = "/activity/" + props.EventID;
  return (
    <div>
      <Grid containter
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={10}>
          <Card className={classes.card}>
              <CardContent>
                <Grid continer
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="felx-start"
                  spacing={0}
                >
                  <Grid item xs={12}>
                    <Typography gutterBottom variant="headline" component="h2">
                      {props.EventTitle}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="p">
                      Date and Time: {props.EventTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="p">
                      Venue: {props.EventVenue}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="p">
                      Address: {props.EventAddress}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={0}>
                  <BlueOutlinedButton  buttonLink={seeEvent} size="medium" color="default" buttonText = "#Checkitout" onClick={AddtoDB(props.EventID)}>
                  </BlueOutlinedButton>
                </Grid>
              </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
