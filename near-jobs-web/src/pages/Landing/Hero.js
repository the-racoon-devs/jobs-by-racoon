const Hero = () => {
  return (
    <div className="position-relative gradient-x-three-sm-primary rounded-2 content-space-t-md-1 content-space-b-md-2 mx-md-10">
      <div className="container position-relative content-space-t-2 content-space-t-lg-3 content-space-b-1">
        <div className="row position-relative zi-2">
          <div className="col-lg-8">
            {/* Heading */}
            <div className="w-lg-75 text-center text-lg-start mb-5 mb-lg-7">
              <h1 className="display-4">
                The one-stop platform for all your
                <br />
                <span className="text-primary text-highlight-warning">
                  job search
                </span>{" "}
                needs powered by web3,
              </h1>
              <h3 className="d-flex align-items-center">
                built on the{" "}
                <img
                  src="https://docs.near.org/img/near_logo.svg"
                  alt="NEAR"
                  style={{ height: "32px" }}
                />{" "}
                Network
              </h3>
            </div>
            {/* End Heading */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="d-none d-lg-block col-lg-6 position-lg-absolute top-0 end-0">
          <img
            className="rounded-2 w-75 h-auto mb-5"
            src={require("../../images/hero.jpg")}
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
