import React from "react";
import Button from "../UI/button/Button";

const PostItem = ({ post, number }) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="posts_btns">
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default PostItem;
