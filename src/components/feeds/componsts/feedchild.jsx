import React, { useState } from "react";
import "./feedchild.css";
import { BsTriangle } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { CiBookmarkCheck } from "react-icons/ci";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Tag from "../../Tag";

const Feedchild = ({ forumData }) => {
  const [posts, setPosts] = useState(
    forumData.length === 1 ? [...forumData] : forumData || []
  );

  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes + 1 } : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId ? { ...post, upvotes: post.upvotes - 1 } : post
      )
    );
  };

  const handleBookmark = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.postId === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  return (
    <div style={{ display: "flex" }}>
      {posts.map((curElm, index) => {
        const iconColor = curElm?.isBookmarked ? "red" : "black";

        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            <div>
              <div style={{ display: "flex" }}>
                <BsTriangle
                  className="upper"
                  onClick={() => handleUpvote(curElm?.postId)}
                />
                <BsTriangle
                  className="lower"
                  onClick={() => handleDownvote(curElm.postId)}
                />
              </div>
              <br />
              <span style={{ marginLeft: "14px", fontWeight: "bold" }}>
                {curElm.upvotes - curElm?.downvotes}
              </span>
            </div>
            <div className="box" style={{ marginLeft: "3px", padding: "5px" }}>
              <div
                className="first"
                style={{ display: "flex", alignItems: "center" }}
              >
                <RxAvatar /> posted by
                <span style={{ color: "blue" }}>@{curElm?.username}</span>.{" "}
                {"3m"}
              </div>
              <div className="second">
                <h2>{curElm?.post}</h2>
                <span>
                  {curElm?.tags.map((cur) => {
                    return <Tag curTag={cur} key={cur} />;
                  })}
                </span>
              </div>
              <p>{curElm.postDescription}</p>
              <hr />
              <div
                className="down"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <NavLink to={`/comment/${curElm?.postId}`}>
                  <BiMessageRoundedDots size={22} />
                </NavLink>
                <AiOutlineShareAlt size={22} />
                <CiBookmarkCheck
                  size={22}
                  style={{ color: iconColor }}
                  onClick={() => handleBookmark(curElm?.postId)}
                />
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Feedchild;
