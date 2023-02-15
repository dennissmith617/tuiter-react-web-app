const PostItem = (post) => {
    return (`
        <li class="wd-post">
        <div class="wd-profile-pic">
            <img class="wd-prof-pic-img" src="${post.profilePic}"></div>
        <div class="wd-prof-info">
            <div>
                <span class="wd-prof-name">${post.name}</span>
                <i class="fas fa-check-circle ml-2"></i>
                <span class="wd-prof-handle">${post.handle}</span>
                <span class="wd-prof-handle dot-before">. ${post.time}</span>
                <a href="#!" class="wd-plain">
                    <span class="wd-ellipsis wd-row"
                        <i class="fas fa-ellipsis-h"></i>
                    </span>
                </a>
                <span class="wd-main-topic wd-row">${post.tuit1}
                <a href="${post.tuitLink}">${post.tuitTag}</a> ${post.tuit2}</span>
            </div>
            <div class="wd-tuit-body"
                <img src="${post.mainPic}" class="wd-storyPic-format">
                <span class="wd-story-title wd-row ${post.extraText === 'false' ? "d-none" : ""}">${post.bodyHeading}</span>
                <span class="wd-story-content wd-row ${post.extraText === 'false' ? "d-none" : ""}">${post.bodyText}</span>
                <span class="wd-story-content wd-row ${post.extraText === 'false' ? "d-none" : ""}">
                    <a class="text-secondary wd-plain" href="${post.bodyLink}"><i class="fas fa-link"></i>${post.bodyLink}
                    </a>
                </span>
            </div>
            <div class="wd-reply-segment"
                <ul class="wd-reaction">
                    <li>
                        <a href="#!" class="wd-no-decoration text-secondary">
                        <span class=""><i class="far fa-comment"></i>
                        </span>
                        <span class="">${post.comments}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" class="wd-no-decoration text-secondary">
                        <span class=""><i class="fas fa-retweet"></i>
                        </span>
                        <span class="">${post.retweets}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" class="wd-no-decoration text-secondary">
                        <span class="wd-reaction-icon"><i class="fas fa-heart reaction-active"></i>
                        </span>
                        <span class="reaction-active">${post.likes}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#!" class="wd-no-decoration text-secondary">
                        <span class=""><i class="fas fa-upload"></i>
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </li>
    `);
}

export default PostItem;