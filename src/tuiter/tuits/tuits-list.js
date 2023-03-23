import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk}                                         // import the thunk
  from "../../services/tuit-thunk";


const TuitsList = () => {
 const {tuits, loading} = useSelector(
  state => state.tuitsData)
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(findTuitsThunk())
 }, [])
    return(
        <ul className="list-group mb-3">
             {
               loading &&
               <li className="list-group-item">
                 Loading...
               </li>
             }

            {
                tuits.map(post =>
                    <TuitItem
                        key={post.id} tuit={post}/> )
            }
        </ul>
    );
};
export default TuitsList;