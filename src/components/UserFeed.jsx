import React, { useState } from "react";
import Post from "./Post";

const UserFeed = ({ forumData }) => {
  const [posts, setPosts] = useState(forumData.posts);

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
    <div className="user-feed">
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          handleUpvote={() => handleUpvote(post.postId)}
          handleDownvote={() => handleDownvote(post.postId)}
          handleBookmark={() => handleBookmark(post.postId)}
        />
      ))}
    </div>
  );
};

export default UserFeed;
