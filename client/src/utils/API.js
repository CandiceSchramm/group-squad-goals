import axios from "axios";
import { primaryCardHeader } from "../assets/jss/material-kit-react";

const BASEURL =
  "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?";

let URL;
if (process.env.NODE_ENV === "production") {
  URL = process.env.REACT_APP_API_PROD;
} else {
  URL = process.env.REACT_APP_API_DEV;
}
export default {
  saveUser: function(newUser) {
    return axios.post(URL + "/api/register", newUser);
  },
  search: function(searchParams) {
    console.log(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams);
    return axios.get(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams, {
      "Content-Type": "application/json"
    });
  },
  singleEvent: function(info) {
    return axios.get(URL + "/single/" + info);
  },
  searchSingle: function(id) {
    return axios.get("https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/get?app_key=B4sxP4pZVXn2ZRz2&id=" + id);
  }
};
