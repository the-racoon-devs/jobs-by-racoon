import * as buffer from "buffer";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const CreateJob = ({ contract }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();
  const [isRemote, setIsRemote] = useState(true);

  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [organization, setOrganization] = useState("");
  const [organizationLogoUrl, setOrganizationLogoUrl] = useState("");

  async function createJob(e, contract) {
    e.preventDefault();
    const job = {
      postedBy: localStorage.currentUser,
      title: jobTitle,
      salary: salary,
      createdAt: new Date().toISOString().slice(0, 10),
      type: type,
      location: location,
      isRemote: isRemote,
      organization: organization,
      organizationLogoUrl: organizationLogoUrl,
    };

    console.log(job);

    // Call contract method to create job
    const resultJob = await contract.createJob(job).catch((err) => {
      console.log(err);
    });

    console.log(resultJob);
  }

  return (
    <>
      {/* Content */}
      <div className="mt-5 container content-space-1 content-space-b-lg-3">
        <div className="w-lg-75 mx-lg-auto">
          {/* Form */}
          <form onSubmit={(e) => createJob(e, contract)}>
            <div className="mb-4">
              <h2>Create a new Job</h2>
            </div>
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="Title">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="Title"
                id="Title"
                placeholder="Eg. Full Stack Engineer"
                aria-label="Title"
                value={jobTitle || ""}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="salary">
                Salary
              </label>
              <input
                type="text"
                className="form-control"
                name="salary"
                id="salary"
                placeholder="Eg. 150K - 200K PA"
                aria-label="salary"
                value={salary || ""}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="type">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                name="type"
                id="type"
                placeholder="Eg. Full Time, Part Time, Freelance, etc"
                aria-label="type"
                value={type || ""}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                name="location"
                id="location"
                placeholder="Eg. New York, San Francisco, etc"
                aria-label="location"
                value={location || ""}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobEmail">
                Is it a Remote job?
              </label>
              <div
                className="d-flex"
                onChange={(event) => {
                  event.target.value === "true"
                    ? setIsRemote(true)
                    : setIsRemote(false);
                }}
              >
                <div className="me-3">
                  <input
                    id="isRemote"
                    type="radio"
                    className="me-1 bg-secondary form-check-input"
                    value="true"
                    name="isRemote"
                  />{" "}
                  <label htmlFor="isRemote">Yes</label>
                </div>
                <div className="">
                  <input
                    id="isRemote"
                    className="me-1 bg-secondary form-check-input"
                    type="radio"
                    value="false"
                    name="isRemote"
                  />{" "}
                  <label htmlFor="isRemote">No</label>
                </div>
              </div>
            </div>
            {/* End Form */}
            <hr className="my-4" />

            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="organizationName">
                Organization Name
              </label>
              <input
                type="text"
                className="form-control"
                name="organizationName"
                id="organizationName"
                placeholder="Eg. Google Inc."
                aria-label="organizationName"
                value={organization || ""}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="organizationAvatarURL">
                Organization Logo URL
              </label>
              <input
                type="text"
                className="form-control"
                name="organizationAvatarURL"
                id="organizationAvatarURL"
                placeholder="Paste your organization's logo URL here"
                aria-label="organizationAvatarURL"
                value={organizationLogoUrl || ""}
                onChange={(e) => setOrganizationLogoUrl(e.target.value)}
              />
              <img
                style={{ height: "200px" }}
                className="rounded mt-3"
                src={
                  organizationLogoUrl ||
                  "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
                }
                alt=""
                srcset=""
              />
            </div>
            {/* End Form */}
            <div className="d-grid mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Create Job
              </button>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
      {/* Content */}
    </>
  );
};

export default CreateJob;
