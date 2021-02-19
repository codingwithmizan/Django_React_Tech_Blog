import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});
  console.log(blog);
  // const { slug } = useParams();
  const slug = props.match.params.id;
  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blog/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogBySlug();
  }, [slug]);
  return (
    <div className="container mt-4">
      <div className="row mx-auto">
        <div className="col-md-8 mx-auto"></div>
        <h2>{blog.title}</h2>
        <h5>Category: {blog.category}</h5>
        <p>
          {blog.month} {blog.day}
        </p>
        <div>
          <img
            src={blog.thumbnail}
            alt="thumbnail"
            // className="img-fluid"
            height="400"
            width="1200"
          />
        </div>
        <div className="my-3">
          <p>{blog.content}</p>
        </div>

        <div>
          <Link to="/" className="btn btn-warning btn-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
