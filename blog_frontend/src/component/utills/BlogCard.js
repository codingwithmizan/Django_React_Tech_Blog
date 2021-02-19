import moment from "moment";
import { Link } from "react-router-dom";
const BlogCard = ({ data }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 col-sm-12">
          <img
            src={data.thumbnail}
            alt="thumbnail"
            className="d-block"
            height="100%"
            width="100%"
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="card-body">
            <Link to={`/blogs/${data.slug}`} className="card-title fs-5 lh-1">
              {data.title}
            </Link>
            <h6 className="card-subtitle text-muted py-2">
              {" "}
              Tags :
              {data.tag.map((item) => (
                <small key={item.id}> {item.title}, </small>
              ))}
            </h6>
            <p className="card-subtitle mb-2 text-muted">
              <small className="text-muted">
                Created by {data.author.username} on{" "}
                {moment(new Date(data.created_at)).format("YYYY/MM/DD")}
              </small>
            </p>
            <p className="card-text">{data.excerpt}</p>
            <div>
              <Link to={`/blogs/${data.slug}`}>Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
