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
      try {
        const job = await contract.getJobById({
          id: Number(jobId),
        });

        var applicantsData = job.applicants.map(async (applicant) => {
          const data = await contract.getUserById({
            id: applicant,
          });
          return data;
        });

        var jobData = await Promise.all(applicantsData);

        setJob({
          ...job,
          applicants: jobData,
        });
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getListings();
  }, []);

  return !loading ? (
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
                        <div className="nav-link ">
                          <i className="bi-person-badge nav-icon" />
                          {job.type}
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link ">
                          <i className="bi-map nav-icon" /> {job.location}
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link ">
                          <i className="bi-briefcase nav-icon" />{" "}
                          {job.isRemote ? "Remote" : "Not Remote"}
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className="nav-link ">
                          <i className="bi-cash nav-icon" /> {job.salary}
                        </div>
                      </li>

                      <li className="nav-item">
                        <div className="nav-link ">
                          <i className="bi-clock nav-icon" /> Created on <br />
                          {job.createdAt}
                        </div>
                      </li>
                      <li className="nav-item">
                        <div className="nav-link ">
                          <i className="bi-person-fill nav-icon" /> Posted by{" "}
                          <br />
                          {job.postedBy}
                        </div>
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
                        <th>Applicant</th>
                        <th>Bio</th>
                        <th>Actions</th>
                        <th style={{ width: "5%" }} />
                      </tr>
                    </thead>

                    <tbody>
                      {job.applicants.map((applicant, index) => (
                        <tr key={index}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <img
                                  className="avatar avatar-sm avatar-circle"
                                  src={
                                    applicant.avatar ||
                                    `https://ui-avatars.com/api/?name=${applicant.firstName}+${applicant.lastName}&background=0D8ABC&color=fff&size=40&bold=true`
                                  }
                                  alt="Profile Pic"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <div className="d-inline-block link-dark">
                                  <h6 className="text-hover-primary mb-0">
                                    {applicant.firstName +
                                      " " +
                                      applicant.lastName}
                                  </h6>
                                </div>
                                <a
                                  href={"mailto:" + applicant.email}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  <small className="d-block">
                                    {applicant.email}
                                  </small>
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            {/* Select */}
                            <div className="tom-select-custom">
                              <div className="p">
                                {applicant.bio || "Bio not available"}
                              </div>
                            </div>
                            {/* End Select */}
                          </td>
                          <td>
                            <a
                              className="btn btn-sm badge me-2 btn-dark"
                              href={applicant.resume}
                            >
                              View Resume
                            </a>
                            <a
                              className="btn btn-sm badge btn-danger"
                              href={"tel:" + applicant.phone}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi-telephone me-2" />
                              Call
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
  ) : (
    <div className="text-center container p-5 vh-50 d-flex align-items-center justify-content-center">
      <h1 className="fw-normal">
        Fetching <span className="fw-bold">job info</span>...
      </h1>
    </div>
  );
};

export default CreatedJob;
