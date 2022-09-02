import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card mb-3">
          <img
            src={
              this.props.imgUrl
                ? this.props.imgUrl
                : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            }
            className="card-img-top"
            alt={this.props.title}
            style={{ width: "100%", height: "30vh" }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}....</p>
            <a
              href={this.props.newsUrl}
              className="btn btn-sm btn-primary"
              target="_blank"
            >
              News Details
            </a>
          </div>
        </div>
      </>
    );
  }
}
