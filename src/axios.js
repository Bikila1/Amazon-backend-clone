import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-back-end1-fc9c3.cloudfunctions.net/api",
});
// http://127.0.0.1:5001/back-end1-fc9c3/us-central1/api

export default instance;
