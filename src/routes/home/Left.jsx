import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsRocket } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";

const Left = () => {
  return (
    <div className="left">
      <p className="outer-icon">
        <AiOutlineHome className="myIcon" /> <p className="icon-name">Home</p>
      </p>
      <p className="outer-icon">
        <BsRocket className="myIcon" />
        <span className="icon-name">Explore</span>
      </p>
      <p className="outer-icon">
        <FaRegBookmark className="myIcon" />
        <span className="icon-name"> Bookmarks</span>
      </p>
      <p className="outer-icon">
        <CgProfile className="myIcon" />
        <span className="icon-name"> Profile</span>
      </p>
    </div>
  );
};

export default Left;
