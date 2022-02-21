import { useEffect, useState } from "react";
import * as buffer from "buffer";

const Landing = ({ contract }) => {
  window.Buffer = buffer.Buffer;
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getListings() {
      await contract
        .getJobs()
        .then((listings) => {
          setListings(listings);
        })
        .catch((error) => {
          console.log(error);
          // Check if contains
          if (
            JSON.stringify(error, Object.getOwnPropertyNames(error)).includes(
              "is not present in the storage"
            )
          ) {
            console.log("Not listings not found");
          }
        });
    }

    getListings();
  }, []);

  return (
    <>
      <header
        id="header"
        className="navbar navbar-expand-lg navbar-end navbar-light"
      >
        <div className="container">
          <nav className="js-mega-menu navbar-nav-wrap">
            {/* Default Logo */}
            <a
              className="navbar-brand d-flex align-items-center"
              href="../demo-jobs/index.html"
              aria-label="Front"
            >
              <img
                className="navbar-brand-logo"
                src={require("../images/logo.png")}
                alt="Logo"
              />
              <span className="ms-2 fs-2 fw-bold">
                Jobs <span className="fs-6">by Racoon</span>
              </span>
            </a>
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
                  <a className="nav-link active" href="../demo-jobs/index.html">
                    Home
                  </a>
                </li>
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="listingsDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle "
                    href="!#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Listings
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-list.html"
                    >
                      Listing
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-grid.html"
                    >
                      Listing (Grid)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                {/* Dropdown */}
                <li className="hs-has-sub-menu nav-item">
                  <a
                    id="pagesDropdown"
                    className="hs-mega-menu-invoker nav-link dropdown-toggle "
                    href="!#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div
                    className="hs-sub-menu dropdown-menu"
                    aria-labelledby="listingsDropdown"
                    style={{ minWidth: "14rem" }}
                  >
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/job-overview.html"
                    >
                      Job Overview
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/apply-for-job.html"
                    >
                      Apply for Job
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employee.html"
                    >
                      Employee (Applicant)
                    </a>
                    <a
                      className="dropdown-item "
                      href="../demo-jobs/employer.html"
                    >
                      Employer (Company)
                    </a>
                  </div>
                </li>
                {/* End Dropdown */}
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="../demo-jobs/upload-resume.html"
                  >
                    Upload resume
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-primary btn-transition"
                    href="../demo-jobs/post-job.html"
                  >
                    Post a job
                  </a>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      <main id="content" role="main">
        {/* Hero */}
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
                <p className="form-text">
                  Search through over 125,000 listings
                </p>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
            <div className="d-none d-lg-block col-lg-6 position-lg-absolute top-0 end-0">
              <img
                className="img-fluid rounded-2"
                src={require("../images/img23.jpg")}
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
        {/* End Hero */}
        {/* Card Grid */}
        <div className="container content-space-2 content-space-t-lg-4 content-space-b-lg-3">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
            <h2>Explore over 2 million tech and startup job-opportunities</h2>
            <p>
              Find a job you love.{" "}
              <a className="link" href="!#">
                Set your career interests.
              </a>
            </p>
          </div>
          {/* End Heading */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
            {/* Listings Start */}
            {listings.map((job, key) => (
              <div key={key} className="col mb-5">
                {/* Card */}
                <div className="card card-bordered h-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col">
                        {/* Media */}
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="avatar avatar-sm avatar-4x3"
                              src={job.organizationLogoUrl}
                              alt="Organization Logo"
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="card-title">
                              <a
                                className="text-dark"
                                href="../demo-jobs/employer.html"
                              >
                                {job.organization}
                              </a>
                            </h6>
                          </div>
                        </div>
                        {/* End Media */}
                      </div>
                      {/* End Col */}
                      <div className="col-auto">
                        {/* Checkbbox Bookmark */}
                        <div className="form-check form-check-bookmark">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="jobsCardBookmarkCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="jobsCardBookmarkCheck1"
                          >
                            {/* <span
                              className="form-check-bookmark-default btn btn-sm btn-outline-dark"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Save this job"
                              onClick={() => applyToJob(job.id)}
                            >
                              <i className="bi bi-box-arrow-in-right me-2"></i>
                              Apply
                            </span> */}
                            <span
                              className="form-check-bookmark-active"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title=""
                              data-bs-original-title="Saved"
                            >
                              <i className="bi-star-fill" />
                            </span>
                          </label>
                        </div>
                        {/* End Checkbbox Bookmark */}
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                    <h3 className="card-title">
                      <a
                        className="text-dark"
                        href="../demo-jobs/employer.html"
                      >
                        {job.title}
                      </a>
                    </h3>
                    <span className="d-block small text-body mb-1">
                      {job.salary}
                    </span>
                    <span className="badge bg-soft-info text-info me-2">
                      <span className="legend-indicator bg-info" />
                      {job.isRemote ? "Remote" : "Local"}
                    </span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">
                        Posted {job.createdAt}
                      </li>
                      <li className="list-inline-item">{job.postedBy}</li>
                      <li className="list-inline-item">{job.type}</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
            ))}
            {/* Listings End */}
          </div>
          {/* End Row */}
          <div className="text-center">
            <a
              className="btn btn-outline-primary"
              href="../demo-jobs/job-list.html"
            >
              View all jobs <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
        {/* End Card Grid */}
        {/* Testimonials */}
        <div className="overflow-hidden gradient-x-three-sm-primary rounded-2 mx-md-10">
          <div className="container content-space-2 content-space-lg-3">
            <div className="row justify-content-center align-items-lg-center">
              <div className="col-10 col-sm-8 col-lg-5 mb-10 mb-lg-0">
                <div className="position-relative">
                  <img
                    className="img-fluid rounded-2"
                    src="../assets/img/900x900/img24.jpg"
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
                      src="../assets/svg/brands/capsule-icon.svg"
                      alt="Description"
                    />
                  </div>
                  {/* Blockquote */}
                  <figure className="mb-5">
                    <blockquote className="blockquote blockquote-lg">
                      " Save time and effort in your hiring journey. Front's
                      simple and powerful tools let you source, screen, and hire
                      faster. "
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Anna Lowry
                      <span className="blockquote-footer-source">
                        HR Director | Capsule
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
                      <p className="small mb-0">
                        more split tests and experiments
                      </p>
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
        {/* End Testimonials */}
        {/* Card Grid */}
        <div className="container content-space-2 content-space-lg-3">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
            <h2>Explore Startups</h2>
            <p>
              Find a job you love.{" "}
              <a className="link" href="!#">
                Set your career interests.
              </a>
            </p>
          </div>
          {/* End Heading */}
          <div className="row row-cols-1 row-cols-sm-2 1 row-cols-md-3 row-cols-lg-4 mb-5">
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">Management</h5>
                      <p className="card-text text-body small">
                        4 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">
                        App Development
                      </h5>
                      <p className="card-text text-body small">
                        26 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">
                        Arts &amp; Entertainment
                      </h5>
                      <p className="card-text text-body small">
                        9 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">Accounting</h5>
                      <p className="card-text text-body small">
                        11 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">UI Designer</h5>
                      <p className="card-text text-body small">
                        37 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">Apps</h5>
                      <p className="card-text text-body small">
                        2 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">
                        Content Writer
                      </h5>
                      <p className="card-text text-body small">
                        10 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a
                className="card card-sm card-bordered card-transition h-100"
                href="../demo-jobs/job-overview.html"
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title text-inherit">Analytics</h5>
                      <p className="card-text text-body small">
                        14 job positions
                      </p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="text-center">
            <a
              className="btn btn-outline-primary"
              href="../demo-jobs/job-list.html"
            >
              View all startups <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
        </div>
        {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <footer className="bg-dark">
        <div className="container pb-1 pb-lg-5">
          <div className="row content-space-t-2">
            <div className="col-lg-3 mb-7 mb-lg-0">
              {/* Logo */}
              <div className="mb-5">
                <a
                  className="navbar-brand"
                  href="../index.html"
                  aria-label="Space"
                >
                  <img
                    className="navbar-brand-logo"
                    src="../assets/svg/logos/logo-white.svg"
                    alt="Description"
                  />
                </a>
              </div>
              {/* End Logo */}
              {/* List */}
              <ul className="list-unstyled list-py-1">
                <li>
                  <a className="link-sm link-light" href="!#">
                    <i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza,
                    Maggieberg
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="tel:1-062-109-9222">
                    <i className="bi-telephone-inbound-fill me-1" /> +1 (062)
                    109-9222
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="text-white mb-3">Company</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="!#">
                    About
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Careers{" "}
                    <span className="badge bg-warning text-dark rounded-pill ms-1">
                      We're hiring
                    </span>
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Customers <i className="bi-box-arrow-up-right small ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Hire us
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm mb-7 mb-sm-0">
              <h5 className="text-white mb-3">Features</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="!#">
                    Press <i className="bi-box-arrow-up-right small ms-1" />
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Pricing
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm">
              <h5 className="text-white mb-3">Documentation</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-0">
                <li>
                  <a className="link-sm link-light" href="!#">
                    Support
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Status
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    API Reference
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    Tech Requirements
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
            <div className="col-sm">
              <h5 className="text-white mb-3">Resources</h5>
              {/* List */}
              <ul className="list-unstyled list-py-1 mb-5">
                <li>
                  <a className="link-sm link-light" href="!#">
                    <i className="bi-question-circle-fill me-1" /> Help
                  </a>
                </li>
                <li>
                  <a className="link-sm link-light" href="!#">
                    <i className="bi-person-circle me-1" /> Your Account
                  </a>
                </li>
              </ul>
              {/* End List */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
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
                <li className="list-inline-item">
                  {/* Button Group */}
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-soft-light btn-xs dropdown-toggle"
                      id="footerSelectLanguage"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-dropdown-animation=""
                    >
                      <span className="d-flex align-items-center">
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </span>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="footerSelectLanguage"
                    >
                      <a
                        className="dropdown-item d-flex align-items-center active"
                        href="!#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="description"
                          width={16}
                        />
                        <span>English (US)</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="!#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/de.svg"
                          alt="description"
                          width={16}
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="!#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/es.svg"
                          alt="description"
                          width={16}
                        />
                        <span>Español</span>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="!#"
                      >
                        <img
                          className="avatar avatar-xss avatar-circle me-2"
                          src="../assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                          alt="description"
                          width={16}
                        />
                        <span>中文 (繁體)</span>
                      </a>
                    </div>
                  </div>
                  {/* End Button Group */}
                </li>
              </ul>
              {/* End Socials */}
            </div>
          </div>
          {/* Copyright */}
          <div className="w-md-85 text-lg-center mx-lg-auto">
            <p className="text-white-50 small">
              © Front. 2021 Htmlstream. All rights reserved.
            </p>
            <p className="text-white-50 small">
              When you visit or interact with our sites, services or tools, we
              or our authorised service providers may use cookies for storing
              information to help provide you with a better, faster and safer
              experience and for marketing purposes.
            </p>
          </div>
          {/* End Copyright */}
        </div>
      </footer>
    </>
  );
};

export default Landing;
