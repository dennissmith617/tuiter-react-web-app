import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = (

) => {
    const profile = useSelector( state => state.profile );

    return (
        <>
            <div className="position-relative">
                <div className="row">
                    <i className="col col-2 bi bi-arrow-left fs-4 fw-bold mt-2"></i>
                    <div className="col "><span className="fs-4 fw-bold">{profile[0].firstName} {profile[0].lastName}</span>
                        <div className="text-secondary">6,114 Tuits</div>
                    </div>
                </div>
                <img src={`/images/${profile[0].bannerPicture}`} width="100%" height={150} />
                <div className="row">
                    <div className="col col-7">
                        <img className="position-absolute rounded-circle bottom-0 start-0 ms-3"
                             height="100px" src={`/images/${profile[0].profilePicture}`} alt="profile picture"/>
                    </div>
                    <div className="col ">
                        <br/>
                        <Link to="/tuiter/edit-profile" className="clearfix">
                            <button className="btn btn-light fw-bold rounded-pill float-end mt-3">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="fs-4 fw-bold">{profile[0].firstName} {profile[0].lastName}</div>
                <div className="text-secondary">{profile[0].handle}</div>
                <div>{profile[0].bio}</div>
                <div className="text-secondary mt-3">
                    <i className="bi bi-geo-alt"></i><span>{profile[0].location}</span>
                    <i className="bi bi-balloon ps-2"></i><span>Born  {profile[0].dateOfBirth}</span>
                    <i className="bi bi-calendar3 ps-2"></i><span>Joined  {profile[0].dateJoined}</span>
                </div>
                <div className="mt-3">
                    <span className="fw-bold">{profile[0].followingCount}</span> <span className="text-secondary">Following</span>
                    <span className="fw-bold ps-2">{profile[0].followersCount}</span> <span className="text-secondary">Followers</span>
                </div>
            </div>
        </>
    );
}

export default ProfileComponent;