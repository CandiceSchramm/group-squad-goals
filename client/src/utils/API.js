import axios from "axios";

export default {
  saveUser: function(newUser) {
    return axios.post("http://localhost:5000/api/register", newUser);
  }
};
//require("dotenv").config();
import axios from "axios";

const BASEURL = "https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?"

export default {
    search: function(searchParams) {
        console.log(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams);
        return axios.get(BASEURL + "app_key=B4sxP4pZVXn2ZRz2" + searchParams,
            {'Content-Type': 'application/json'}
        );
    }
}
