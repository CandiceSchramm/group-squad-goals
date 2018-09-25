import axios from "axios";

export default {
  saveUser: function(newUser) {
    return axios.post("http://localhost:5000/api/register", newUser);
  }
};
