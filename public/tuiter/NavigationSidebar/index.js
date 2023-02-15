const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->

       <a href="#" class="list-group-item list-group-item-action">
        <div>
            <i class="fa-home fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Home</span>
        </div>
       </a>

       <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa-hashtag fa fa-inverse wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Explore</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-bell fa wd-float-left wd-icon" ></i>
            <span class="d-none d-xl-block wd-float-left">Notifications</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-envelope fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Messages</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-bookmark fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Bookmarks</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-list fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Lists</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-user fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">Profile</span>
       </a>

       <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-circle fa wd-float-left wd-icon"></i>
            <span class="d-none d-xl-block wd-float-left">More</span>
       </a>

   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;