import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import Sidebar from "../sidebar/Sidebar";
import BlogDetails from "../utills/BlogDetails";
import CreateComment from "../comment/CreateComment";
import ShowComment from "../comment/ShowComment";

const SingleBlog = (props) => {
  const [feaching, setFeaching] = useState(true);
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  console.log(singleBlogPost.id);
  const slug = props.match.params.slug;
  useEffect(() => {
    feachBlogContentById();
  }, []);
  const feachBlogContentById = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/blogs/${slug}/`);
      setSingleBlogPost(res.data);
      setFeaching(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        {feaching ? (
          <div className="col-md-8">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <div className="col-md-8">
            <BlogDetails data={singleBlogPost} />
            <CreateComment id={singleBlogPost.id} />
            <ShowComment />
          </div>
        )}
        <div className="col-md-4 mt-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
