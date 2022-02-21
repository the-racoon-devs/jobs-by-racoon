import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as buffer from "buffer";

const Listings = ({ contract }) => {
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
    <div className="container content-space-2 content-space-t-lg-4 content-space-b-lg-3">
      {/* Heading */}
      <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
        <h2>Explore over 2 million tech and startup job-opportunities</h2>
      </div>
      {/* End Heading */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
        {/* Listings Start */}
        {listings.map(
          (job, key) =>
            key < 6 && (
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
            )
        )}
        {/* Listings End */}
      </div>
      {/* End Row */}
      <div className="text-center">
        <Link className="btn btn-outline-primary" to="/dashboard/listings">
          View all jobs <i className="bi-chevron-right small ms-1" />
        </Link>
      </div>
    </div>
  );
};

export default Listings;
