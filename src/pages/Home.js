import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import "./Home.css";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
          <div className="home__headerLeft">
             <p>About</p>
             <p>Store</p>
           </div>

           <div className="home__headerRight">
             <p>Gmail</p>
             <p>Images</p>
             <AppsIcon />
             <Avatar />
           </div>
      </div>

      <div className="home__body">
           <img
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx9YII3UewjukW9TbL1wKcj4i1G_HmWthPRQ&usqp=CAU"
             alt="/"
            />

          <div className="home__inputContainer">
            <Search />
          </div>
      </div>
    </div>
  );
}

export default Home;
