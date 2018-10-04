import React from "react";
// @material-ui/core components
import { Route, Redirect } from "react-router";
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Footer from "../Footer/Footer";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardHeader from "../Card/CardHeader";
import CardFooter from "../Card/CardFooter";
import CustomInput from "../CustomInput/CustomInput";

import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage";
import axios from "axios";

let URL;
if (process.env.NODE_ENV === "production") {
  URL = process.env.REACT_APP_API_PROD;
} else {
  URL = process.env.REACT_APP_API_DEV;
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      name: "",
      email: "",
      password: "",
      user: {}
    };
  }

  componentDidMount() {
    axios
      .post(URL + "/api/verify", {
        verify: localStorage.getItem("token")
      })
      .then(res => {
        this.setState({
          user: {
            token: localStorage.getItem("token")
          }
        });
      });
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios
      .post(URL + "/api/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log("res.data: ", res.data);
        localStorage.setItem("token", res.data.token);
        this.setState({
          user: res.data
        });
      });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { user } = this.state;
    return (
      <div>
        {user.token ? (
          <Redirect to="/events" />
        ) : (
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card className={classes[this.state.cardAnimaton]}>
                    <form className={classes.form}>
                      <CardHeader
                        color="primary"
                        className={classes.cardHeader}
                      >
                        <h4>Login</h4>
                        <div className={classes.socialLine}>
                          <Button
                            justIcon
                            href="/auth/google"
                            target=""
                            onClick={this.handleToggle}
                          >
                            <i className={"fab fa-google-plus-g"} />
                          </Button>
                        </div>
                      </CardHeader>
                      <p className={classes.divider}>Or Be Classical</p>
                      <CardBody>
                        <CustomInput
                          labelText="First Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "name",
                            onChange: this.handleInputChange,
                            type: "text",
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          name="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "email",
                            onChange: this.handleInputChange,
                            type: "email",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            name: "password",
                            onChange: this.handleInputChange,
                            type: "password",
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={this.handleFormSubmit}
                        >
                          Login Here
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <Footer whiteFont />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
