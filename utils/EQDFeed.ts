import axios from "axios";

let feed = "https://www.equestriadaily.com/feeds/posts/default";

export async function getFormattedFeed() {
    let response = await axios.get(feed);
    let data = response.data;
    console.log(typeof data);
    return data;
}