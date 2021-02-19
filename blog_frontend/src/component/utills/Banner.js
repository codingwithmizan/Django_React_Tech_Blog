const Banner = () => {
  return (
    <div className="row mx-auto bg-success p-4">
      <div className="col-md-6 mx-auto">
        <div className="text-light text-center">
          <h2>Welcome to TechBlog</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <input
              type="text"
              placeholder="Search you want"
              className="form-control form-control-sm "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
