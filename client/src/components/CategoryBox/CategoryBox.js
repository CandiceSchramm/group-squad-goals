import React, { Component } from "react";
import API from "../../utils/API";
import Grid from "@material-ui/core/Grid";
import EventsNav from "../Nav/EventsNav";
import SearchIcon from "@material-ui/icons/Search";
import Background from "../Background/Background";
import EventCard from "../Card/EventCard";
import Typography from "@material-ui/core/Typography";
import Chips from "../Chips/Chips";
import FindEventButton from "../Buttons/FindEventButton";
import ReusableNav from "../Nav/ReusableNav";
import axios from "axios";

let URL;
if (process.env.NODE_ENV === "production") {
  URL = process.env.REACT_APP_API_PROD;
} else {
  URL = process.env.REACT_APP_API_DEV;
}

class CategoryBox extends Component {
  state = {
    categories: [
      "concerts",
      "festivals",
      "family",
      "preforming",
      "movies",
      "film",
      "comedy",
      "nightlife",
      "campus",
      "networking",
      "education",
      "galleries",
      "literary",
      "museums",
      "science",
      "sports",
      "outdoors",
      "pets",
      "neighborhood",
      "spirituality",
      "organizations"
    ],
    chosenCategories: [],
    events: []
  };

  componentDidMount = () => {
    let location = "Salt+Lake+City"
    let info = "&location=" + location + "&date=This+Week&within=25";
    API.search(info)
      .then(res => {
        this.setState({ events: res.data.events.event });
      })
      .catch(err => console.log(err));

    let token = sessionStorage.getItem("token");
    console.log("Here is the user's token: ", token);
    // API.findOne(token).then();
    axios.get("/api/current_user/" + token);
  };

  categorySearch = category => {
    let info =
      "&location=Salt+Lake+City&date=This+Week&within=25&c=" + category;
    API.search(info)
      .then(res => {
        let oldevents = [...this.state.events, ...res.data.events.event];

        this.setState({ events: oldevents });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ReusableNav navbarTitle="#SquadEvents">
        </ReusableNav>
        {this.state.categories.length > 0 ? (
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {this.state.categories.map(category => (
              <Grid item xs={1}>
                <Chips eventInfo={category} onClick={this.categorySearch} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3>No Results Yet</h3>
        )}
        {this.state.events.map(event => (
          <EventCard
            EventTitle={event.title}
            EventTime={event.start_time}
            EventVenue={event.venue_name}
            EventAddress={
              event.venue_address +
              ", " +
              " " +
              event.city_name +
              " " +
              event.region_name +
              ", " +
              event.postal_code
            }
            EventID={event.id}
          />
        ))}
      </div>
    );
  }
}
export default CategoryBox;
