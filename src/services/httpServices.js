import axios from "axios";

//axios.defaults.baseURL = ""

const http = {
  Post: axios.post,
  Put: axios.put,
  Delete: axios.delete,
  Get: axios.get,
}

export default http;