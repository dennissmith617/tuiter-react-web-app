import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group mb-3">
            {
                tuitsArray.map(t =>
                    <TuitItem
                        key={t._id} tuit={t}/> )
            }
        </ul>
    );
};
export default TuitsList;