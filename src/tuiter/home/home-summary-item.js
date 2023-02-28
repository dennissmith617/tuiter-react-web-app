import React from "react";
import "./index.css";
import RetweetedPost from "./retweetedpost";
import RepliedPost from "./repliedpost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,faCircleDot, faDotCircle, faEllipsisH, faRetweet} from "@fortawesome/free-solid-svg-icons";

const HomeSummaryItem = (
    {
        post =   {
            "topic": "SpaceX",
            "userName": "@SpaceX",
            "time": "23h",
            "title": "Dennis and Akiki Tito  are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
            "image": "datito.jpeg",
            "url": "https://www.spacex.com/updates/",
            "profile": "spacexlogo.jpeg",
            "likes": "11.1k",
            "retweets": "5000",
            "comments": "1000",
            "retweetBy": "Elon Musk"
        },

    }
) => {

    return(
        <li className="list-group-item">
            <div className="row">
                {
                    post.retweetBy &&
                    <div className={"fw-bolder wd-retweeted"}>
                    <FontAwesomeIcon className ={"wd-retweet"} icon={faRetweet}/>{post.retweetBy} Retweeted<
                    /div>
                }
                <div className="col-2">
                    { post.profile && <img width={60} className={"rounded-5"} src={'../../images/'+post.profile}/>}
                </div>
                <div className="col-10">
                    <span className={"fw-bolder"}>{post.topic} </span>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    <span className={"wd-gray-col"}> {post.userName} . {post.time} </span>
                    <FontAwesomeIcon icon={faEllipsisH} className={"float-end wd-gray-col"}></FontAwesomeIcon>
                    <div className={"wd-title"}>{post.title} <a className={"wd-retweet-post"} href={"https://www."+post.url}>{post.url}</a></div>
                    { post.retweeted &&
                        <>
                         <li className="list-group-item">
                        <div className="col-2">
                            {post.retweeted.profile && <img width={60} className={"rounded-5"} src={'../../images/'+post.retweeted.profile}/>}
                        </div>
                        <div className="col-10">
                            <span className={"fw-bolder"}>{post.retweeted.userName} </span>
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                             <span className={"wd-gray-col"}> {post.retweeted.userName} . {post.retweeted.time} </span>
                             <div className={"wd-title"}>{post.retweeted.title}</div>
                         </div>
                         </li>
                        </>
                    }
                    <RetweetedPost className={"col-10 wd-title"} post={post}/>
                    <RepliedPost post={post}/>
                    <div className ={"wd-thread"}>
                        { post.url!=null && <a className={"wd-retweet-post"} href={"https://www."+post.url}> Show this thread</a>}
                    </div>

                </div>


            </div>
        </li>
    );
};
export default HomeSummaryItem;