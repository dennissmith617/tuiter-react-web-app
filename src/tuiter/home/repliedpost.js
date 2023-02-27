import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart, faRetweet, faAngleUp} from "@fortawesome/free-solid-svg-icons";

const RepliedPost = ({
                       post = {"_id": 234,
                       "topic": "Elon Musk",
                       "userName": "@elonmusk",
                       "time": "15h",
                       "title": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal everywhere.",
                       "likes":  "19.2k",
                       "retweets": "1,601",
                       "comments": "5,346",
                       "retweeted": {
                         "topic": "SpaceX",
                         "userName": "@SpaceX",
                         "time": "16h",
                         "title": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → starlink.com/rv",
                         "profilePic": "spaceXlogo.jpeg"
                         }
                     }
                          }) => {
    return <div>
        <ul className={"wd-interact-options"}>
            <li className={"wd-option"}><FontAwesomeIcon icon={faComment} />{post.comments} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faRetweet} />{post.retweets} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faHeart} /> {post.likes} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faAngleUp} /> </li>
        </ul>
    </div>
};


export default RepliedPost;