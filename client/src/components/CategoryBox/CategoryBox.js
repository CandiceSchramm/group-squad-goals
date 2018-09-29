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
                // res => console.log(res)
                res => this.setState({ events: res.data.events.event })
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
                <Grid container spacing={12} />
                {/* <Buttons {'onClick'}={(event) => this.APISearch(event)} />  */}
                
        
                <EventCard>            
                {this.state.categories.length ? (
                    <div>
                        {/* {this.state.categories.map(category => (
                            <SearchCategories
                                categoryinfo={category}
                                onClick={this.updateCategories}
                            >
                            </SearchCategories>
                        ))} */}
                    </div>
                ) : (
                        <h3>
                            Please wait for Component to load
                    </h3>

                    )}
                <button onClick={(event) => this.APISearch(event)}>
                    Find me activities
                </button>
                {this.state.events.length > 0 ? (
                    <div>
                        {this.state.events.map(eventView => (
                            <SingleEvent
                                eventtitle={eventView.title}
                                eventtime={eventView.start_time}
                                eventaddress={eventView.venue_address}
                                eventcity={eventView.city_name}
                                eventid={eventView.id}
                                eventimage={eventView.image ? eventView.image.small.url : "placeholder"}
                            >
                            </SingleEvent>

                        ))}
                    </div>
                ) : (
                        <h3>
                            No Results Yet
                    </h3>
                    )}


                </EventCard>

                <Chips />



            </div>
        );
    }
}
export default CategoryBox;


//.data.events.event[].title
//.data.events.event[].start_time
//data.events.event[].venue_address
//data.events.event[].city_name
//data.events.event[].id
//data.events/event[].image.small.url