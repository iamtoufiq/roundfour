import React from "react";
import Left from "./home/Left";
import Feedchild from "../components/feeds/componsts/feedchild";
import { useParams } from "react-router-dom";
import CommentSec from "../components/commentSection/CommentSec";
import Sorted from "../components/Sorted/Sorted";
const Comments = ({ forumData }) => {
  const { id } = useParams();
  const dataToPass = forumData.filter((curelemnt) => {
    return curelemnt.postId == id;
  });

  return (
    <div className="grid-container">
      <Left />
      <div className="middle">
        <h3> Post</h3>
        <Feedchild forumData={dataToPass} />
        <CommentSec comments={dataToPass[0]?.comments[0]} />
      </div>
      {/* <div className="right">
        <Sorted />
      </div> */}
    </div>
  );
};

export default Comments;
