const Hero = () => {
  return (
    <div className="position-relative gradient-x-three-sm-primary rounded-2 content-space-t-md-1 content-space-b-md-2 mx-md-10">
      <div className="container position-relative content-space-t-2 content-space-t-lg-3 content-space-b-1">
        <div className="row position-relative zi-2">
          <div className="col-lg-8">
            {/* Heading */}
            <div className="w-lg-75 text-center text-lg-start mb-5 mb-lg-7">
              <h1 className="display-4">
                Find the most
                <br />
                <span className="text-primary text-highlight-warning">
                  exciting
                </span>{" "}
                jobs
              </h1>
            </div>
            {/* End Heading */}
            <form>
              {/* Input Card */}
              <div className="input-card input-card-sm">
                <div className="input-card-form">
                  <label
                    htmlFor="jobTitleForm"
                    className="form-label visually-hidden"
                  >
                    Job, title, skills, or company
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-prepend input-group-text">
                      <i className="bi-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitleForm"
                      placeholder="Job, title, skills, or company"
                      aria-label="Job, title, skills, or company"
                    />
                  </div>
                </div>
                <div className="input-card-form">
                  <label
                    htmlFor="cityForm"
                    className="form-label visually-hidden"
                  >
                    City, state, or zip
                  </label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-prepend input-group-text">
                      <i className="bi-geo-alt" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="cityForm"
                      placeholder="City, state, or zip"
                      aria-label="City, state, or zip"
                    />
                  </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
              {/* End Input Card */}
            </form>
            <p className="form-text">Search through over 125,000 listings</p>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="d-none d-lg-block col-lg-6 position-lg-absolute top-0 end-0">
          <img
            className="img-fluid rounded-2"
            src={require("../../images/img23.jpg")}
            alt="Description"
          />
          {/* SVG Shape */}
          <div
            className="position-absolute top-0 start-0 zi-n1 mt-n6 ms-n7"
            style={{ width: "10rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 335.2 335.2"
              width={100}
              height={100}
            >
              <circle
                fill="#FFC107"
                opacity=".7"
                cx="167.6"
                cy="167.6"
                r="130.1"
              />
            </svg>
          </div>
          {/* End SVG Shape */}
          {/* SVG Shape */}
          <div
            className="position-absolute bottom-0 end-0 zi-n1 mb-n6 me-n10"
            style={{ width: "10rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 335.2 335.2"
              width={120}
              height={120}
            >
              <circle
                fill="none"
                stroke="#377dff"
                strokeWidth={75}
                cx="167.6"
                cy="167.6"
                r="130.1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
