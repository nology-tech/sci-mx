import "./assets/styles/base.scss";
import React, { useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import UserProvider from "./context/UserProvider/UserProvider";

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <UserProvider>
      <Router>
        <Navbar handleSidebarToggle={handleSidebarToggle}/>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handleSidebarToggle={handleSidebarToggle}
        />
        <Routes />
      </Router>
    </UserProvider>
  );
};

export default App;
