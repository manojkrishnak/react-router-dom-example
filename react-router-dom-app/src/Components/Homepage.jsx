import {Link} from "react-router-dom";


function Homepage() {
  return (
    <>
      <div className="home-container flex col flex-80">
        <h2 className="home-heading">🚀Welcome to Homepage</h2>
        <div className="flex justify-bt home-links">
          <Link className="flex-30" to="/articles">
            Articles Page
          </Link>
          <Link className="flex-30" to="/books">
            Books Page
          </Link>
          <Link className="flex-30" to="/people">
            People Page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
