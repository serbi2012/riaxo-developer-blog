import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../components/templates/MainLayout/MainLayout";
import BlogPost from "../components/organisms/BlogPost/BlogPost";

interface Post {
  title: string;
  date: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  return (
    <MainLayout>
      {posts.map((post, index) => (
        <BlogPost
          key={index}
          title={post.title}
          date={post.date}
          content={post.content}
        />
      ))}
    </MainLayout>
  );
};

export default Home;
