import axios from "axios";

axios.defaults.baseURL = "https://nodejs-post-app.herokuapp.com/api"

const http = {
  Post: axios.post,
  Put: axios.put,
  Delete: axios.delete,
  Get: axios.get,
}

export default http;