import React from "react";
import styles from "./BlogPost.module.scss";
import axios from "axios";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  const postHandleButtonClick = async () => {
    try {
      const response = await axios.post("/api/create-post", {
        title: title,
        content: content,
      });

      if (response.status === 201) {
        console.log("Post created successfully:", { title, date, content });
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const getHandleButtonClick = async () => {
    try {
      const response = await axios.get("/api/get-posts");

      console.log("getHandleButtonClick ~ response:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={styles.blogPost}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.content}>{content}</p>
      <button className={styles.saveButton} onClick={postHandleButtonClick}>
        Save
      </button>
      <button className={styles.saveButton} onClick={getHandleButtonClick}>
        Get Posts
      </button>
    </div>
  );
};

export default BlogPost;
