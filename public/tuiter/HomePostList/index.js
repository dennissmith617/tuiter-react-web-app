import PostItem from "./PostItem.js";
import homepost from "./homepost.js";

const PostList = () => {
    return (`
        <ul class="list-group">
            ${
        homepost.map(post => {
            return(PostItem(post));
            }).join("")}
                </ul>
    `)
}
export default PostList;