import moment from "moment";
import { Link } from "react-router-dom";
const BlogDetails = ({ data }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-12">
        <div>
          <img
            src={data.cover}
            alt="cover-img"
            className="d-block"
            //   className="img-fluid"
            width="100%"
            height="300px"
          />
        </div>
        <div className="my-4">
          <h5>{data.title}</h5>
          <h6>
            Tags :{" "}
            {data.tag.map((item) => (
              <small key={item.id}> {item.title}, </small>
            ))}
          </h6>
          <p>
            {" "}
            Created by {data.author.username} on{" "}
            {moment(new Date(data.created_at)).format("YYYY/MM/DD")}
          </p>
        </div>
        <div>
          <p>{data.content}</p>
        </div>
        {/* <Link to="/">Back to Home</Link> */}
      </div>
    </div>
  );
};

export default BlogDetails;
