import React from "react";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RetweetedPost = ({
                                  post = {
                                      "topic": "SpaceX",
                                      "userName": "@SpaceX",
                                      "time": "23h",
                                      "title": "Dennis and Akiki Tito  are the first two crewmembers on Starship's second commercial spaceflight around the Moon ",
                                      "profile": "spacexlogo.jpeg",
                                      "retweet": {

                                      }
                                  }
                              }) => {
    if(post.image!=null) {
        return (Image(post.image));
    } else {
        return (Tweet(post.retweet));
    }
};


function Image(url) {
    return  <div><img className="rounded-4 wd-full-width" src={'../../images/'+url}/></div>
}

function Tweet(post) {
    return <li className="list-group-item rounded-2"><div>
        <img width={20} src={"../images/"+post.profile} className ="rounded-5"/>
        <span className={"fw-bolder wd-mgn-left"}>{post.topic} </span>
        <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
        <span className={"wd-gray-col"}> {post.userName} . {post.time} </span>
        <i className={"fa-solid fa-check"}></i>
        <div>{post.title}</div>
    </div></li>;
}

export default RetweetedPost;