import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src="./assets/menu.png" alt="" />
       <Link to='/'> <img className="logo" src="./assets/logo.png" alt=""/></Link> 
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
        <input type="text" id="searchInput" placeholder="search" />
        <img src="./assets/search.png" alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src="/assets/upload.png" alt="" />
        <img src="/assets/more.png" alt="" />
        <img src="/assets/notification.png" alt="" />
        <img src="/assets/jack.png" className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
