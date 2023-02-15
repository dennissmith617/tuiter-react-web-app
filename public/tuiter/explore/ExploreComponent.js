import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <!-- search field and cog -->
            <div class="row">
                <div class="col-11">
                    <div class="input-group border rounded-pill bg-white">
                        <span class="input-group-text bg-transparent border-0">
                            <i class="fas fa-search text-dark"></i>
                        </span>
                        <input type="text" placeholder="Search Tuiter"
                            class="form-control bg-transparent border-0 wd-color-black">
                    </div>
                </div>
                <div class="col-1 text-primary">
                    <i class="fas fa-cog fa-2x f-button-color"></i>
                </div>
            </div>

           <!-- tabs -->
           <br>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="foryou.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <ul class="list-group border-0 wd-bottom-mgn">
                <li class="list-group-item border-0 m-0 p-0">
                    <div class="position-relative text-white">
                        <img src="../../images/spaceX-starship-a4.webp"
                            class="img-fluid" alt="spacexphoto">
                        <div class="fw-bold fs-2 position-absolute wd-mainphoto">SpaceXs Starship</div>
                    </div>
                </li>
           </ul>

           <!-- summary list -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
