import React, { Component } from "react";
import SearchCategories from "../SearchCatigories";
import SearchBox from "../SearchBox";
import API from "../../utils/API";
import SingleEvent from "../SingleEvent";
import Grid from "@material-ui/core/Grid";
import EventsNav from "../Nav/EventsNav";
import SearchIcon from '@material-ui/icons/Search';
import Background from '../Background/Background';
import EventCard from '../Card/EventCard';
import Typography from '@material-ui/core/Typography';
import Chips from '../Chips/Chips'
import Buttons from '../Buttons/Buttons'


class CategoryBox extends Component {

    state = {
        categories: ["concerts", "festivals", "family", "preforming", "movies", "film", "comedy", "nightlife", "campus", "networking", "education", "galleries", "literary", "museums", "science", "sports", "outdoors", "pets", "neighborhood", "spirituality", "organizations"],
        chosenCategories: "",
        events: []
    }

    componentDidMount = () => {
        let info = "&location=Salt+Lake+City&date=This+Week&within=25";
        console.log(info);
        API.search(info)
            .then(
                res => {
                    this.setState({ events: res.data.events.event });
                    console.log(this.state.events);
                }
            )
        .catch(err => console.log(err));
    }

    categorySearch = (category) => {
        let info = "&location=Salt+Lake+City&date=This+Week&within=25&c=" + category;
        console.log(info);
        API.search(info)
            .then(
                res => {
                    this.setState({ events: res.data.events.event });
                    console.log(this.state.events);
                }
            )
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>

                <EventsNav />
                {this.state.categories.length > 0 ? (
                    <div>
                        {this.state.categories.map(category => (
                            <Chips
                                eventInfo={category}
                                onClick={this.categorySearch}
                            >
                            </Chips>

                        ))}
                    </div>
                ) : (
                        <h3>
                            No Results Yet
                        </h3>
                    )
                }
                <EventCard/>

            </div>
        );
    }
}
export default CategoryBox;