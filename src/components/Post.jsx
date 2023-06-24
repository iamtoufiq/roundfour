import React from "react";

const Post = ({ post, handleUpvote, handleDownvote, handleBookmark }) => {
  return (
    <div className="post">
      <h3>{post.post}</h3>
      <p>{post.postDescription}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <button onClick={handleDownvote}>Downvote</button>
      <div className="vote-count">{post.upvotes - post.downvotes}</div>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <span className="tag-pill" key={index}>
            {tag}
          </span>
        ))}
      </div>
      <div className="post-options">
        <button onClick={handleBookmark}>
          {post.isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
        <button>Comment</button>
        <button disabled>Share</button>
      </div>
    </div>
  );
};

export default Post;
