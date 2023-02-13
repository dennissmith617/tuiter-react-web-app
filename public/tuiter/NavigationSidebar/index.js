function navigationSidebar() {
    return('
    <div class="list-group rounded wd-sidebar-vertcenter">
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                style="border:none">
                    <i class="fa-solid fa-t fa-2x" style="color:dodgerblue"></i></a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                style="border:none">
                    <div>
                        <i class="fa-solid fa-house-user fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                        <span class="d-none d-xl-block wd-float-left">Home</span>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font wd-selected-side-tab margin-extension"
                   style="border:none">
                    <i class="fa-hashtag fa fa-inverse wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Explore</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-regular fa-bell fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Notifications</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-regular fa-envelope fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Messages</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-regular fa-bookmark fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Bookmarks</span>
                </a>

                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-solid fa-fire fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Top Articles</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-regular fa-user fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">Profile</span>
                </a>
                <a href="#" class="list-group-item list-group-item-action wd-gray-font margin-extension"
                   style="border:none">
                    <i class="fa-solid fa-ellipsis fa wd-float-left wd-icon" style="color: rgb(61,61,61)"></i>
                    <span class="d-none d-xl-block wd-float-left">More</span>
                </a>
                <button class="btn btn-primary wd-tuit-btn">
                    Tuit
                </button>
            </div>
    ');
}
export default NavigationSidebar;