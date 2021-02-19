import LatestBlog from "./LatestBlog";
import BlogCategory from "./BlogCategory";
import BlogTag from "./BlogTag";
const sidebar = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-4">
          <LatestBlog />
          <BlogCategory />
          <BlogTag />
        </div>
      </div>
    </>
  );
};

export default sidebar;
