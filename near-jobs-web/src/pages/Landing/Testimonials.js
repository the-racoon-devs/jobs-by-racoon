import Image from "../../images/subi.png";

const Testimonials = () => {
  return (
    <div className="overflow-hidden gradient-x-three-sm-primary rounded-2 mx-md-10">
      <div className="container content-space-2 content-space-lg-3">
        <div className="row justify-content-center align-items-lg-center">
          <div className="col-10 col-sm-8 col-lg-5 mb-10 mb-lg-0">
            <div className="position-relative">
              <img
                className="img-fluid rounded-2"
                src={Image}
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
              {/* End SVG Shape */}
            </div>
          </div>
          {/* End Col */}
          <div className="col-lg-7">
            <div className="ps-lg-6">
              <div className="mb-3">
                <img
                  className="avatar"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--zRn2RQKh--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/4317/4add55f4-31e4-4815-836c-b142b2766150.jpg"
                  alt="Logo"
                />
              </div>
              {/* Blockquote */}
              <figure className="mb-5">
                <blockquote className="blockquote blockquote-lg">
                  "Jobs by Racoon has helped us save time and effort in our
                  hiring journey. Racoon's simple and powerful tools let you
                  source, screen, and hire faster."
                </blockquote>
                <figcaption className="blockquote-footer">
                  Elizabeth
                  <span className="blockquote-footer-source">
                    President | Pattarai
                  </span>
                </figcaption>
              </figure>
              {/* End Blockquote */}
              <div className="row">
                <div className="col-sm-6 col-md-4 mb-3 mb-sm-0">
                  <h2 className="text-primary mb-1">59%</h2>
                  <p className="small mb-0">
                    in budget saved on unconverting ads
                  </p>
                </div>
                {/* End Col */}
                <div className="col-sm-6 col-md-4 mb-3 mb-sm-0">
                  <h2 className="text-primary mb-1">27%</h2>
                  <p className="small mb-0">
                    in time saved on campaign management
                  </p>
                </div>
                {/* End Col */}
                <div className="col-sm-6 col-md-4">
                  <h2 className="text-primary mb-1">2.1x</h2>
                  <p className="small mb-0">more split tests and experiments</p>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
    </div>
  );
};

export default Testimonials;
