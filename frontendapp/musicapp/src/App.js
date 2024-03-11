
import { BrowserRouter } from "react-router-dom";
// import AdminNavBar from "./admin/AdminNavBar";
// import MainNavBar from "./main/MainNavBar";
import UserNavBar from "./user/UserNavBar";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <MainNavBar/> */}
      <UserNavBar/>

      {/* <AdminNavBar/> */}
    
      </BrowserRouter>
    </div>
  );
}

export default App;
