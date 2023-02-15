import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {
    return (`
            <ul class="list-group">
                ${posts.map(posts => {
                        return (PostSummaryItem(posts));
                                }).join('')}
                       </ul>
 `); }

 export default PostSummaryList;