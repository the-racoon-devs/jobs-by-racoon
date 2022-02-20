import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-end navbar-light"
    >
      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap">
          {/* Default Logo */}
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
            aria-label="Jobs"
          >
            <img
              className="navbar-brand-logo"
              src={require("../../images/logo.png")}
              alt="Logo"
            />
            <span className="ms-2 fs-2 fw-bold">
              Jobs <span className="fs-6">by Racoon</span>
            </span>
          </Link>
          {/* End Default Logo */}
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <i className="bi-list" />
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x" />
            </span>
          </button>
          {/* End Toggler */}
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard/listings"
                >
                  Listings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard/my-applications"
                >
                  My Applications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/dashboard/created-jobs"
                >
                  My Listings
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link " to="/dashboard/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link
                  className="btn btn-primary btn-transition"
                  to="/dashboard/create-job"
                >
                  Create a Job
                </Link>
              </li>
            </ul>
          </div>
          {/* End Collapse */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
