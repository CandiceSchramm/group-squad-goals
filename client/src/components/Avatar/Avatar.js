import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const styles = {
  bigAvatar: {
    width: 300,
    height: 300,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 100,
  }
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div>
        <Avatar
          alt="Adelle Charles"
          src="https://www.rd.com/wp-content/uploads/2018/05/shutterstock_725437768-760x506.jpg"
          className={classNames(classes.bigAvatar)}
        />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImageAvatars);
