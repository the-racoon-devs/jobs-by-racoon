const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container pb-1 pb-lg-5">
        <div className="border-top border-white-10 my-7" />
        <div className="row mb-7">
          <div className="col-sm mb-3 mb-sm-0">
            {/* Socials */}
            <ul className="list-inline list-separator list-separator-light mb-0">
              <li className="list-inline-item">
                <a className="link-sm link-light" href="!#">
                  Privacy &amp; Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="!#">
                  Terms
                </a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="!#">
                  Site Map
                </a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
          <div className="col-sm-auto">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="!#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="!#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="!#">
                  <i className="bi-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="!#">
                  <i className="bi-github" />
                </a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* Copyright */}
        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">
            &copy; 2021 Racoon Internet Services. All rights reserved.
          </p>
          <p className="text-white-50 small">
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </p>
        </div>
        {/* End Copyright */}
      </div>
    </footer>
  );
};

export default Footer;
