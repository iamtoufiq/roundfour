import React from "react";
import "./commentsec.css";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
const CommentSec = ({ comments }) => {
  return (
    <>
      {comments ? (
        <>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <div className="comment">
            <div className="comment__item">
              <div className="flex">
                <img
                  src={comments?.picUrl}
                  alt="avatar"
                  className="comment__item__avatar"
                />
                <div className="flex-grow">
                  <h3 className="comment__item__title">{comments?.username}</h3>
                  <h4 className="comment__item__subtitle">
                    @{comments?.username}
                  </h4>
                </div>
                <button type="button" aria-label="reply" className="btn--reply">
                  Reply
                </button>
              </div>
              <p className="comment__item__content">{comments?.comment}.</p>
            </div>
            <hr style={{ opacity: "0.4" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <AiOutlineHeart size={20} />
              <BiComment size={20} />
              <AiOutlineShareAlt size={20} />
            </div>
          </div>
        </>
      ) : (
        <h2>NO commnets</h2>
      )}
    </>
  );
};

export default CommentSec;
