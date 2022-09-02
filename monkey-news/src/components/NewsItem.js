import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card mb-4">
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
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"90%", zIndex:"1"}}>{this.props.source}</span>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}....</p>
            <p class="card-text"><small class="text-muted">By {this.props.author ? this.props.author : "Unknown" } On {new Date(this.props.date).toGMTString()}</small></p>
            <a
              href={this.props.newsUrl}
              className="btn btn-sm btn-success"
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
