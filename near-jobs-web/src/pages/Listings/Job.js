import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as buffer from "buffer";

const CreatedJob = ({ contract }) => {
  window.Buffer = buffer.Buffer;

  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  const { jobId } = useParams();

  useEffect(() => {
    async function getListings() {
      const job = await contract.getJobById({ id: Number(jobId) });
      const applicantsData = job.applicants.map(
        async (applicant) => await contract.getUserById({ id: applicant })
      );
      setJob({
        ...job,
        applicants: applicantsData,
      });
      setLoading(false);
    }

    async function getListings() {
      await contract
        .getJobById({ id: Number(jobId) })
        .then((job) => {
          console.job(job);
          const applicantsData = job.applicants.map((applicant) => {
            async function getUserData() {
              const data = await contract
                .getUserById({
                  id: applicant,
                })
                .then((data) => {
                  return data;
                });
              return data;
            }

            return getUserData();
          });

          setJob(job);
        })
        .catch((error) => {
          console.error("error", error);
          // Check if contains
          if (
            JSON.stringify(error, Object.getOwnPropertyNames(error)).includes(
              "is not present in the storage"
            )
          ) {
            console.log("No listings not found");
          }
        });
    }
    getListings();
  }, []);

  return (
    !loading && (
      <main id="content" role="main" className="bg-light">
        {/* Breadcrumb */}
        <div className="navbar-dark bg-dark">
          <div className="container content-space-1 content-space-b-lg-3">
            <div className="row align-items-center">
              <div className="col">
                <div className="d-none d-lg-block">
                  <h1 className="h2 text-white">Job info</h1>
                </div>
                {/* Breadcrumb */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-light mb-0">
                    <li className="breadcrumb-item">Created Jobs</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Job Info
                    </li>
                  </ol>
                </nav>
                {/* End Breadcrumb */}
              </div>
              {/* End Col */}
              <div className="col-auto">
                {/* Responsive Toggle Button */}
                <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebarNav"
                  aria-controls="sidebarNav"
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
                {/* End Responsive Toggle Button */}
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Breadcrumb */}
        {/* Content Section */}
        <div className="container content-space-1 content-space-t-lg-0 content-space-b-lg-2 mt-lg-n10">
          <div className="row">
            <div className="col-lg-3">
              {/* Navbar */}
              <div className="navbar-expand-lg navbar-light">
                <div
                  id="sidebarNav"
                  className="collapse navbar-collapse navbar-vertical"
                >
                  {/* Card */}
                  <div className="card flex-grow-1 mb-5">
                    <div className="card-body">
                      {/* Avatar */}
                      <div className="d-none d-lg-block text-center mb-5">
                        <div className="avatar avatar-xxl avatar-circle mb-3">
                          <img
                            className="avatar-img"
                            src={
                              job.organizationLogoUrl ||
                              "https://i.stack.imgur.com/ATB3o.gif"
                            }
                            alt="Organization Logo"
                          />
                        </div>
                        <h4 className="card-title mb-0">
                          {job.title || "Loading Title"}
                        </h4>
                        <p className="card-text small">
                          {job.organization || "Loading Org"}
                        </p>
                      </div>
                      {/* End Avatar */}
                      {/* Nav */}
                      <span className="text-cap">Details</span>
                      {/* List */}
                      <ul className="nav nav-sm nav-tabs nav-vertical mb-4">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./account-overview.html"
                          >
                            <i className="bi-person-badge nav-icon" />
                            {job.type}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./account-security.html"
                          >
                            <i className="bi-shield-shaded nav-icon" /> Security
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./account-notifications.html"
                          >
                            <i className="bi-bell nav-icon" /> Notifications
                            <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">
                              1
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./account-preferences.html"
                          >
                            <i className="bi-sliders nav-icon" /> Preferences
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </div>
              {/* End Navbar */}
            </div>
            {/* End Col */}
            <div className="col-lg-9">
              {/* Card */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header-title">Applications</h4>
                </div>
                {/* Table */}
                <div className="table-responsive">
                  {job.applicants.length > 0 ? (
                    <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                      <thead className="thead-light">
                        <tr>
                          <th>Full Name</th>
                          <th>Bio</th>
                          <th>Resume</th>
                          <th style={{ width: "5%" }} />
                        </tr>
                      </thead>

                      <tbody>
                        {job.applicants.map((applicant, index) => (
                          <tr key={index}>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <span className="avatar avatar-sm avatar-warning avatar-circle">
                                    <span className="avatar-initials">FH</span>
                                  </span>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                  <div className="d-inline-block link-dark">
                                    <h6 className="text-hover-primary mb-0">
                                      Finch Hoot
                                    </h6>
                                  </div>
                                  <small className="d-block">
                                    finch@example.com
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td>
                              {/* Select */}
                              <div className="tom-select-custom">
                                <select
                                  className="js-select form-select form-select-sm tomselected"
                                  id="tomselect-5"
                                  tabIndex={-1}
                                  hidden="hidden"
                                >
                                  <option
                                    value="memberStatusLabelActive4"
                                    data-option-template='<span class="d-flex align-items-center"><span class="legend-indicator bg-success me-2"></span> Active</span>'
                                    selected={true}
                                  >
                                    Active
                                  </option>
                                  <option
                                    value="memberStatusLabelInactive4"
                                    data-option-template='<span class="d-flex align-items-center"><span class="legend-indicator bg-danger me-2"></span> Inactive</span>'
                                  >
                                    Inactive
                                  </option>
                                </select>
                                <div
                                  className="ts-control js-select form-select form-select-sm single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input"
                                  tabIndex={0}
                                >
                                  <div className="items ts-input full has-items">
                                    <span
                                      className="d-flex align-items-center item"
                                      data-value="memberStatusLabelActive4"
                                    >
                                      <span className="legend-indicator bg-success me-2" />{" "}
                                      Active
                                    </span>
                                  </div>
                                  <div className="tom-select-custom">
                                    <div
                                      className="ts-dropdown single js-select form-select form-select-sm plugin-change_listener plugin-hs_smart_position plugin-dropdown_input"
                                      style={{ display: "none" }}
                                    >
                                      <div className="dropdown-input-wrap" />
                                      <div
                                        role="listbox"
                                        id="tomselect-5-ts-dropdown"
                                        tabIndex={-1}
                                        className="ts-dropdown-content"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Select */}
                            </td>
                            <td>
                              {/* Select */}
                              <div className="tom-select-custom">
                                <select
                                  className="js-select form-select form-select-sm tomselected"
                                  id="tomselect-6"
                                  tabIndex={-1}
                                  hidden="hidden"
                                >
                                  <option
                                    value="memberStatusLabelCanView4"
                                    selected={true}
                                  >
                                    Can view
                                  </option>
                                  <option value="memberStatusLabelAdmin4">
                                    Admin
                                  </option>
                                  <option value="memberStatusLabelCanEdit4">
                                    Can edit
                                  </option>
                                </select>
                                <div
                                  className="ts-control js-select form-select form-select-sm single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input"
                                  tabIndex={0}
                                >
                                  <div className="items ts-input full has-items">
                                    <div
                                      data-value="memberStatusLabelCanView4"
                                      className="item"
                                    >
                                      Can view
                                    </div>
                                  </div>
                                  <div className="tom-select-custom">
                                    <div
                                      className="ts-dropdown single js-select form-select form-select-sm plugin-change_listener plugin-hs_smart_position plugin-dropdown_input"
                                      style={{ display: "none" }}
                                    >
                                      <div className="dropdown-input-wrap" />
                                      <div
                                        role="listbox"
                                        id="tomselect-6-ts-dropdown"
                                        tabIndex={-1}
                                        className="ts-dropdown-content"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Select */}
                            </td>
                            <td>
                              <a
                                className="text-body"
                                href="https://acme.com"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-original-title="Remove member"
                              >
                                <i className="bi-trash" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center">No Applicants yet</div>
                  )}
                </div>
                {/* End Table */}
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Content Section */}
      </main>
    )
  );
};

export default CreatedJob;
