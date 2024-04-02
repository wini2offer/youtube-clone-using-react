import React from "react";
import "./sidebar.css";

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`} >
  
      
      
      <div className="shortcut-links">
        <div className={`side-link ${category==0?"active":""}`} onClick={()=>setCategory(0)} >
          <img src="/assets/home.png" alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category==20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src="/assets/game_icon.png" alt="" />
          <p>Game</p>
        </div>
        <div className={`side-link ${category==2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src="/assets/automobiles.png" alt="" />
          <p>Automobile</p>
        </div>
        <div className={`side-link ${category==17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src="/assets/sports.png" alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category==24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src="/assets/entertainment.png" alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category==28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src="./assets/tech.png" alt="" />
          <p>Technology</p>
        </div>
        <div className={`side-link ${category==10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src="/assets/music.png" alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category==22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src="/assets/blogs.png" alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category==25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src="/assets/news.png" alt="" />
          <p>News</p>
        </div>
        <hr />
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link" onClick={()=>setCategory()}>
                <img src="/assets/jack.png" alt="" /><p>PewDiePew</p>
            </div>

            <div className="side-link" onClick={()=>setCategory()}>
                <img src="/assets/simon.png" alt="" /><p>MrBeast</p>
            </div>

            <div className="side-link" onClick={()=>setCategory()}>
                <img src="/assets/tom.png" alt="" /><p>Justine Bieber</p>
            </div>

            <div className="side-link" onClick={()=>setCategory()}>
                <img src="/assets/cameron.png" alt="" /><p>5-Minute Craft</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
