import Header from "./Header";
import Sidebar from "./Sidebar";
import "../App.css"

function Help() {
  return (
    <div className="flex col">
      <Header />
      <div className="flex justify-bt">
        <Sidebar />
        <div className="home-container flex flex-80">
        <h2 className="help-heading">👨‍💻 How can i help you?</h2>
        </div>
      </div>
    </div>
  );
}

export default Help;
