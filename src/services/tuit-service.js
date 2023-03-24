import axios from 'axios';                                  // import Axios
//const TUITS_API = 'http://localhost:4000/api/tuits';
//const TUITS_API = 'https://tuiter-node-server-app-jx9y.onrender.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
 const response = await axios.post(TUITS_API, tuit)
 return response.data;
}


export const findTuits = async () => {                      // async tags this function as asynchronous
 const response = await axios.get(TUITS_API);               // send HTTP GET request to TUITS_API
 const tuits = response.data;                               // extract JSON array from response from server
 return tuits;                                              // return tuits
}


export const updateTuit = async (tuit) => {
  const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
}


export const deleteTuit = async (tid) => {
  const response = await axios
    .delete(`${TUITS_API}/${tid}`)
  return response.data
}