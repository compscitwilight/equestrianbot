import axios from "axios";

let feed = "https://www.equestriadaily.com/feeds/posts/default";

export async function getFormattedFeed() {
    let response = await axios.get(feed);
    let data = response.data as string;
    let start = data.split("<entry>")[1];
    let cutOffs = start.replace("</entry>", " ").split(/ g/);
    console.log(cutOffs);
    return data;
}