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
import FindEventButton from "../Buttons/FindEventButton";


class CategoryBox extends Component {

    state = {
        categories: ["concerts", "festivals", "family", "preforming", "movies", "film", "comedy", "nightlife", "campus", "networking", "education", "galleries", "literary", "museums", "science", "sports", "outdoors", "pets", "neighborhood", "spirituality", "organizations"],
        chosenCategories: [],
        events: []
    }


    APISearch = () => {
        let info = "&location=Salt+Lake+City&date=This+Week&within=25&c=";
        for (var i = 0; i < this.state.chosenCategories.length - 1; i++) {
            info = info + this.state.chosenCategories[i] + "||";
        }
        if (this.state.chosenCategories.length > 1) {
            info = info + this.state.chosenCategories[this.state.chosenCategories.length - 1];
        }
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

    updateCategories = (event, category) => {
        const { name, value } = event.target;
        console.log("Event target: " + event.target, category);
        console.log("name: " + name);
        console.log("value: " + value);
        let newcategories = [...this.state.chosenCategories];
        newcategories.push(category);
        console.log("newcategories: " + newcategories);
        this.setState({
            chosenCategories: newcategories
        });
        console.log(this.state.chosenCategories);
    };

    render() {
        return (
            <div>

                <EventsNav />
                {this.state.categories.length > 0 ? (
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                    >

                        {this.state.categories.map(category => (

                            <Grid item xs={1}>
                                <Chips
                                    eventInfo={category}
                                >
                                </Chips>
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                        <h3>
                            No Results Yet
                        </h3>
                    )
                }
                <FindEventButton
                    onClick={this.APISearch()}
                />
                {this.state.events.map(event => (
                    <EventCard
                    EventTitle={event.title}
                    >
                    </EventCard>
                            
                        

                ))}


            </div >
        );
    }
}
export default CategoryBox;