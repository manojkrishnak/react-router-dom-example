import { NavLink } from "react-router-dom";
import "../App.css";

function Sidebar() {
  return (
    <>
      <aside className="sidebar flex col flex-20">
        <NavLink className="navlink" activeClassName="active" to="/" exact>
          Home
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/articles">
          Articles
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/people">
          People
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/books">
          Books
        </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/help">
          Help &#38; Support
        </NavLink>
      </aside>
    </>
  );
}

export default Sidebar;
