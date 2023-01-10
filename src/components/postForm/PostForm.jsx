import React, { useState } from "react";
import { v4 } from "uuid";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost ={
      id: v4(),
      title,
      body
    }
   props.onPost(newPost) 
   setTitle('')
   setBody('')
  };

  return (
    <form>
      <Input
        onChange={titleChangeHandler}
        value={title}
        type="text"
        placeholder="Name of posts"
      />
      <Input
        onChange={bodyChangeHandler}
        value={body}
        type="text"
        placeholder="Description of posts"
      />
      <Button onClick={addNewPost}>Add post</Button>
    </form>
  );
};

export default PostForm;
