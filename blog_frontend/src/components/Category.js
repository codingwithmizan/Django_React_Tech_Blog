import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = (props) => {
  const [blogs, setBlog] = useState([]);
  console.log(blogs);
  const category = props.match.params.id;
  console.log(category);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.post(
          `http://localhost:8000/api/blog/category`,
          { category },
          config
        );
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, [category]);

  return (
    <div className="container mt-3">
      <div className="mb-3 row  mx-auto">
        <div className="col-md-12">
          <div className='"nav d-flex justify-content-between'>
            <Link to="/category/world" className=" text-muted">
              World
            </Link>
            <Link to="/category/environment" className=" text-muted">
              Environment
            </Link>
            <Link to="/category/technology" className=" text-muted">
              Technology
            </Link>
            <Link to="/category/design" className=" text-muted">
              Design
            </Link>
            <Link to="/category/culture" className=" text-muted">
              Culture
            </Link>
            <Link to="/category/business" className=" text-muted">
              Business
            </Link>
            <Link to="/category/politics" className=" text-muted">
              Politics
            </Link>
            <Link to="/category/opinion" className=" text-muted">
              Opinion
            </Link>
            <Link to="/category/science" className=" text-muted">
              Science
            </Link>
            <Link to="/category/health" className=" text-muted">
              Health
            </Link>
            <Link to="/category/style" className=" text-muted">
              Style
            </Link>
            <Link to="/category/travel" className=" text-muted">
              Travel
            </Link>
          </div>
        </div>
      </div>

      <div className="row  mx-auto">
        {blogs.map((blogPost) => (
          <div className="col-md-6" key={blogPost.id}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <div className="mb-3">
                      <h5 className="card-text text-primary">
                        {blogPost.category.toUpperCase()}
                      </h5>
                    </div>
                    <h5 className="card-title">{blogPost.title}</h5>

                    <div className="mb-1">
                      <p className="card-text">
                        <small className="text-muted">
                          {blogPost.month} {blogPost.day}
                        </small>
                      </p>
                    </div>
                    <p className="card-text">{blogPost.excerpt}</p>
                    <Link
                      to={`/blog/${blogPost.slug}`}
                      className="btn btn-primary btn-sm"
                    >
                      Continue reading
                    </Link>
                  </div>
                </div>

                <div className="col-md-4">
                  <img
                    src={blogPost.thumbnail}
                    alt="thumbnail"
                    width="200"
                    height="250"
                    // className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <Link to="/" className="btn btn-warning btn-sm">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
