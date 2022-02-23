import React from "react";
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from'./Widgets'
import './App.css';
function App() {
  return (
    <div className="app">
      
      {/*sideBar */}
      <Sidebar/>
      {/*Feed */}
      <Feed />
     
      {/*widgets */}
      <Widgets />
    </div>  
  ); 
}

export default App;
