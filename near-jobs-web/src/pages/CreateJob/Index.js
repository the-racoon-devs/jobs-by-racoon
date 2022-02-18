import * as buffer from "buffer";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const CreateJob = ({ contract }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();
  const [isRemote, setIsRemote] = useState(true);

  const titleRef = useRef();
  const salaryRef = useRef();
  const typeRef = useRef();
  const locationRef = useRef();
  const organizationRef = useRef();
  const organizationAvatarURLRef = useRef();

  async function createJob(e, contract) {
    e.preventDefault();
    const job = {
      postedBy: localStorage.currentUser,
      title: titleRef.current?.value,
      salary: salaryRef.current?.value,
      createdAt: new Date().toISOString().slice(0, 9),
      type: typeRef.current?.value,
      location: locationRef.current?.value,
      isRemote: isRemote,
      organization: organizationRef.current?.value,
      organizationLogoUrl: organizationAvatarURLRef.current?.value,
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
      <div className="container content-space-1 content-space-b-lg-3">
        <div className="w-lg-75 mx-lg-auto">
          {/* Form */}
          <form onSubmit={(e) => createJob(e, contract)}>
            <div className="mb-4">
              <h3>Personal information</h3>
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
                placeholder="Title"
                aria-label="Title"
                ref={titleRef}
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
                placeholder="Salary"
                aria-label="salary"
                ref={salaryRef}
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
                placeholder="type"
                aria-label="type"
                ref={typeRef}
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
                placeholder="Location"
                aria-label="location"
                ref={locationRef}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobEmail">
                Remote?
              </label>
              <div
                onChange={(event) => {
                  event.target.value === "true"
                    ? setIsRemote(true)
                    : setIsRemote(false);
                }}
              >
                <input
                  type="radio"
                  className="mx-2 form-check-input"
                  value="true"
                  name="isRemote"
                />{" "}
                Yes
                <input
                  className="mx-2 form-check-input"
                  type="radio"
                  value="false"
                  name="isRemote"
                />{" "}
                No
              </div>
            </div>
            {/* End Form */}
            <hr className="my-7" />
            <div className="mb-4">
              <h3>Organization Details</h3>
            </div>
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
                placeholder="Organization Name"
                aria-label="organizationName"
                ref={organizationRef}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="organizationAvatarURL">
                Organization Avatar URL
              </label>
              <input
                type="text"
                className="form-control"
                name="organizationAvatarURL"
                id="organizationAvatarURL"
                placeholder="Organization Avatar URL"
                aria-label="organizationAvatarURL"
                ref={organizationAvatarURLRef}
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
