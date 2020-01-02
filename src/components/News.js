import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";

import { fetchNews } from "../actions";

class News extends React.Component {
  async componentDidMount() {
    await this.props.fetchNews("normal");
  }

  newsCard = (title, link, thumbnail, description) => {
    const content = description.split("</a>");
    return (
      <div
        key={uuid()}
        className="card col-sm-6 col-md-4 col-lg-3 mt-2"
        style={{ paddingRight: "0", paddingLeft: "0" }}
      >
        <img
          className="card-img-top"
          src={
            thumbnail === "undefined" || thumbnail === ""
              ? "https://via.placeholder.com/180x108"
              : thumbnail
          }
          alt=""
        />
        <div className="card-body bg-danger text-light d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content[1]}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info mt-auto"
          >
            Read More
          </a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="row container m-auto pt-5">
        {this.props.news.map((item, index) =>
          index < this.props.num
            ? this.newsCard(
                item.title,
                item.link,
                item.thumbnail,
                item.description
              )
            : null
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ news: state.news, num: state.displayNum });

export default connect(mapStateToProps, { fetchNews })(News);
