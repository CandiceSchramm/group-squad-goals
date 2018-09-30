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

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
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
            <Grid item xs={3}>
              <Typography component="p">
                {props.EventTime}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component="p">
                {props.EventVenue}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <Grid continer
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={0}
      >
        <CardActions>
          <BlueOutlinedButton size="medium" color="default"
            buttonText="Event Details"
          >
          </BlueOutlinedButton>
        </CardActions>
      </Grid>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
