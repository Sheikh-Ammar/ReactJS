import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 4,
    category: "general",
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 0,
      totalResult: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eb3322355ba54db7910cef2d59d75c5b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      articles: parseData.articles,
      totalResult: parseData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=eb3322355ba54db7910cef2d59d75c5b&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };
  handleNextClick = async () => {
    console.log("nb");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=eb3322355ba54db7910cef2d59d75c5b&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page + 1,
      articles: parseData.articles,
    });
    console.log("na");
  };

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "6rem" }}>
          <h2 className="text-center mt-5">
            <b>News Monkey Top-Headlines</b>
          </h2>
          {this.state.loading && <Spinner />}
          <div className="row mt-5">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 20) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="container text-center">
          <button
            type="button"
            className="btn btn-dark mx-5 my-4"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Prev
          </button>
          <button
            type="button"
            className="btn btn-dark mx-5 my-4"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResult / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
