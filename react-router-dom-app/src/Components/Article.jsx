import "../App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import articlesData from "../articlesData.json";
import {Link} from "react-router-dom";

function Article(props) {
    const articleId = props.match.params.id;
    const [article] = articlesData.filter((article) => article.slug === articleId);
    console.log(article);
  return (
    <div className="flex col">
      <Header />
      <div className="flex justify-bt">
        <Sidebar />
        <article className="flex flex-80 col home-container">
            <Link className="back-btn" to="/articles">	&#60;&#8211; &nbsp; Go Back </Link>
          <h2 className="article-heading">{article.title}</h2>
          <p className="content">The slug of the article is: <span className="slug">{article.slug}</span></p>
        </article>        
      </div>
    </div>
  );
}

export default Article;
