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
    axios.post(URL + "/api/register", newUser).then(res => {
      return res;
    });
  },
  search: function(searchParams) {
    console.log(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams);
    return axios.get(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams, {
      "Content-Type": "application/json"
    });
  },
  searchSingle: function(id) {
    return axios.get("https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/get?app_key=B4sxP4pZVXn2ZRz2&id=" + id);
  },
  getActivity: function(id) {
    return axios.get(URL + "/backend/activity/" + id)
  },
  getMessages: function(id) {
    return axios.get(URL + "/backend/message/" + id)
  },
  sendMessage: function(id) {
    return axios.post(URL + "/backend/message/", id )
  },
  addActivity: function(id) {
    console.log("Hello, this is the id: " + id);
    console.log("And this ths the URL: " + URL)
    return axios.post(URL + "/backend/activity/", id)
  },

};
