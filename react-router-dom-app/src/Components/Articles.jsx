import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import articlesData from "../articlesData.json";
import { Link } from "react-router-dom";
import "../App.css";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      bookName: e.target.value,
    });
  };

  render() {
    let articlesDataFilter = articlesData.filter((article) => {
      let regex = new RegExp(this.state.bookName, "g");
      return regex.test(article.title.toLowerCase());
    });
    console.log(articlesDataFilter);
    return (
      <div className="flex col">
        <Header />
        <div className="flex justify-bt">
          <Sidebar />
          <div className="home-container flex col flex-80">
            <div>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.bookName}
                name="article-name"
                id="search-article"
                className="search-article"
                placeholder="Search for an article"
              />
            </div>
            <ul className="all-articles">
              {articlesDataFilter.map((article) => {
                return (
                  <li key={article.slug}>
                    <Link
                      className="article-title"
                      to={"/article/" + article.slug}
                    >
                      {article.title}
                    </Link>
                    <span className="author-name">{article.author}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
