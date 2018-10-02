import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '../Buttons/BlueOutlinedButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

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
  let seeEvent = "/activity/" + props.id;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.EventTitle}
          </Typography>
          <Typography component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button buttonLink={seeEvent} size="medium" color="default" buttonText = "#Checkitout">
        </Button>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
