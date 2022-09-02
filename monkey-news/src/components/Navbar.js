import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border border-success border-bottom">
          <div className="container">
            <Link className="navbar-brand" to="">
              MonekyNews
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="container mx-5">
                <div className="row">
                  <div className="col-md-8 offset-1">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="business"
                        >
                          Business
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="entertainment"
                        >
                          Entertainment
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="health"
                        >
                          Health
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="science"
                        >
                          Science
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="sports"
                        >
                          Sports
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          to="technology"
                        >
                          Technology
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
