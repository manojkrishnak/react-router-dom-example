import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="flex col">
      <Header />
      <div className="flex justify-bt">
      <Sidebar />
      <Homepage />
      </div>
    </div>
  );
}

export default App;
