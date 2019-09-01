import axios from "axios";
import {
  FETCH_NEWS,
  FETCH_NEWS_ECO,
  FETCH_NEWS_REL,
  FETCH_NEWS_WORLD
} from "./types";

export const fetchNews = () => async dispatch => {
  const res = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthoi-su.rss&api_key=oipf0neuifx1jgdyr09l4kvol4mvfwbcz2mkzvse&order_by=pubDate&order_dir=desc&count=8"
  );
  dispatch({ type: FETCH_NEWS, payload: res.data.items });
};

export const fetchNewsEco = () => async dispatch => {
  const res = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fkinh-doanh.rss&api_key=oipf0neuifx1jgdyr09l4kvol4mvfwbcz2mkzvse&order_by=pubDate&order_dir=desc&count=8"
  );
  dispatch({ type: FETCH_NEWS_ECO, payload: res.data.items });
};

export const fetchNewsWorld = () => async dispatch => {
  const res = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fthe-gioi.rss&api_key=oipf0neuifx1jgdyr09l4kvol4mvfwbcz2mkzvse&order_by=pubDate&order_dir=desc&count=8"
  );
  dispatch({ type: FETCH_NEWS_WORLD, payload: res.data.items });
};

export const fetchNewsRel = () => async dispatch => {
  const res = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvnexpress.net%2Frss%2Fgiai-tri.rss&api_key=oipf0neuifx1jgdyr09l4kvol4mvfwbcz2mkzvse&order_by=pubDate&order_dir=desc&count=8"
  );
  dispatch({ type: FETCH_NEWS_REL, payload: res.data.items });
};
