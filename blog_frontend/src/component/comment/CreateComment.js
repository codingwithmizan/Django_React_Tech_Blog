import { useState } from "react";
import axios from "axios";
const CreateComment = ({ id }) => {
  const [comment, setComment] = useState({
    author: "",
    commentbody: "",
  });

  const { author, commentbody } = comment;
  const handlerComment = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8000/api/blog-comments/`);
    }
    console.log(comment);
  };
  return (
    <div className="row my-3">
      <div className="col-md-12">
        <div>
          <h5>Write a Comment !</h5>
        </div>
        <div>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter your name"
                name="author"
                value={author}
                onChange={(e) => handlerComment(e)}
              />
            </div>
            <div className="mb-2">
              <textarea
                name="comment"
                className="form-control"
                placeholder="Enter your comment"
                name="commentbody"
                value={commentbody}
                onChange={(e) => handlerComment(e)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateComment;
