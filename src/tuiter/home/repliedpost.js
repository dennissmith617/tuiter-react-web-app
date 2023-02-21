import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/fontawesome-free-regular";
import {faArrowUp, faRetweet, faShare, faUpload} from "@fortawesome/fontawesome-free-solid";
import {faArrowUpFromBracket} from "@fortawesome/free-solid-svg-icons/faArrowUpFromBracket";

const RepliedPost = ({
                       post = {"_id": 234,
                       "topic": "Elon Musk",
                       "userName": "@elonmusk",
                       "time": "15h",
                       "title": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal everywhere.",
                       "image": "elonprofilepic.jpeg",
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
            <li className={"wd-option"}><FontAwesomeIcon icon={faComment}/> {post.commentsCount} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faRetweet}/> {post.retweetCount} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faHeart}/> {post.likesCount} </li>
            <li className={"wd-option"}><FontAwesomeIcon icon={faArrowUpFromBracket}/> </li>
        </ul>
    </div>
};


export default RepliedPost;