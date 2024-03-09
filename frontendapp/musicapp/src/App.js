// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
// import UserNavBar from "./user/components/UserNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainNavBar/>
      {/* <UserNavBar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
