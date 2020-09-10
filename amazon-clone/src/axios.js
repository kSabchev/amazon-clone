import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-kaloyan.cloudfunctions.net/api"
  //"http://localhost:5001/clone-kaloyan/us-central1/api"
});

export default instance;
