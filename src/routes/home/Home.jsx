import React, { useState } from "react";
import "./home.css";

import Sorted from "../../components/Sorted/Sorted";
import Left from "./Left";
import Feedchild from "../../components/feeds/componsts/feedchild";
const Home = ({ forumData }) => {
  const [datas, setDatas] = useState(forumData.posts);
  return (
    <div className="grid-container">
      <Left />
      <div className="middle">
        <h3>Latest Posts</h3>
        <Feedchild forumData={datas} />
      </div>
      <div className="right">
        <Sorted forumData={forumData} datas={datas} setDatas={setDatas} />
      </div>
    </div>
  );
};

export default Home;
