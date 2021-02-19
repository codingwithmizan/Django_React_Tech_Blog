import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import BlogCard from "../utills/BlogCard";
import Sidebar from "../sidebar/Sidebar";
import TopBlog from "../sidebar/TopBlog";
import Banner from "../utills/Banner";
const Home = () => {
  const [feaching, setFeaching] = useState(true);
  const [blogPost, setBlogPost] = useState([]);
  console.log(blogPost);
  useEffect(() => {
    feachBlogContent();
  }, []);
  const feachBlogContent = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/blogs/`);
      setBlogPost(res.data);
      setFeaching(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <Banner />
      <div className="container mt-3">
        <div className="row mx-auto">
          <div className="col-md-12">
            <TopBlog />
          </div>
        </div>
        <div className="row mx-auto">
          {feaching ? (
            <div className="col-md-7">
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
              <Skeleton height={100} />
            </div>
          ) : (
            <div className="col-md-8">
              {blogPost.map((blog) => (
                <BlogCard data={blog} key={blog.id} />
              ))}
            </div>
          )}

          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
