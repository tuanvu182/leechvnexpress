import axios from "axios";
import { FETCH_NEWS, CHANGE_DISPLAY } from "./types";
import { links } from "../apiLink/links";

export const fetchNews = title => async dispatch => {
  let queryLink =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthoi-su.rss&api_key=oipf0neuifx1jgdyr09l4kvol4mvfwbcz2mkzvse&order_by=pubDate&order_dir=desc&count=25";

  if (links.hasOwnProperty(title)) {
    queryLink = links[title];
  } else {
    console.log("Sai Link");
  }
  const res = await axios.get(queryLink);
  dispatch({ type: FETCH_NEWS, payload: res.data.items });
};

export const changeDisplay = num => ({
  type: CHANGE_DISPLAY,
  payload: num
});
