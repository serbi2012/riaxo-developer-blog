import styles from "./BlogPost.module.scss";

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, content }) => {
  return (
    <div className={styles.blogPost}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default BlogPost;
