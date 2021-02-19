import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/blog/`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, []);

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

      <div className="row mx-auto mb-3">
        <div className="col-md-12 mx-auto">
          <div
            style={{ backgroundColor: "#D8D8D8" }}
            className="p-4 bg-primary text-light"
          >
            <h1 className="dispaly-4 font-italic text-light">
              Style trend of 2021
            </h1>
            <p className="lead my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div>
              <Link to="#" className="text-light">
                Continue reading ...
              </Link>
            </div>
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
      </div>
    </div>
  );
};

export default Blog;
