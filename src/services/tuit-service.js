import axios from 'axios';                                  // import Axios
const TUITS_API = 'http://localhost:4000/api/tuits';        // location of HTTP services

export const createTuit = async (tuit) => {}                // implement in following section

export const findTuits = async () => {                      // async tags this function as asynchronous
 const response = await axios.get(TUITS_API);               // send HTTP GET request to TUITS_API
 const tuits = response.data;                               // extract JSON array from response from server
 return tuits;                                              // return tuits
}


export const deleteTuit = async (tuit) => {}                // implement in following section
export const updateTuit = async (tuit) => {}                // implement in following section