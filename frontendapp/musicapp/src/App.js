// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from "react-router-dom";
// import AdminNavBar from "./admin/AdminNavBar";
// // import UserNavBar from "./user/UserNavBar";
import MainNavBar from "./main/MainNavBar";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <MainNavBar/>
      {/* <UserNavBar/>
      <AdminNavBar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
