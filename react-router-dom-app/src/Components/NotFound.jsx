import "../App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function NotFound() {
  return (
    <div className="flex col">
      <Header />
      <div className="flex justify-bt">
        <Sidebar />
        <div className="home-container flex col flex-80">
          <h2 className="notfound-heading">404 - Page Not Found</h2>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
