import * as buffer from "buffer";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Onboard = ({ contract }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();
  const [profile, setProfile] = useState();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const bioRef = useRef();
  const avatarRef = useRef();
  const resumeLinkRef = useRef();

  function createUser(e, contract) {
    e.preventDefault();
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;
    const bio = bioRef.current?.value;
    const avatar = avatarRef.current?.value;
    const resumeLink = resumeLinkRef.current?.value;

    console.log(firstName, lastName, phone, email, bio, avatar, resumeLink);

    console.log(contract);
    // Call contract method to create user
    contract
      .createUser({
        id: localStorage.currentUser,
        firstName: firstName,
        lastName: lastName,
        bio: bio,
        avatar: avatar,
        resume: resumeLink,
        email: email,
        phone: phone,
      })
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    // Get profile
    contract
      .getUserById({ id: localStorage.currentUser })
      .then((userObject) => {
        setProfile(userObject);
        console.log(userObject);
        console.log("456");
        if (userObject !== null || userObject !== undefined) {
          history.push("/dashboard/listings");
        } else {
          // history.push("/dashboard/onboard");
        }
      })
      .catch((error) => {
        console.log();
        // Check if contains
        if (
          JSON.stringify(error, Object.getOwnPropertyNames(error)).includes(
            "is not present in the storage"
          )
        ) {
          // history.push("/dashboard/onboard");
          console.log("User not found");
        }
      });
  }, []);

  return (
    <>
      {/* Content */}
      <div className="container content-space-1 content-space-b-lg-3">
        <div className="w-lg-75 mx-lg-auto">
          {/* Form */}
          <form onSubmit={(e) => createUser(e, contract)}>
            <div className="mb-4">
              <h3>Personal information</h3>
            </div>
            <div className="row">
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="applyForJobFirstName">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="applyForJobNameFirstName"
                    id="applyForJobFirstName"
                    placeholder="First name"
                    aria-label="First name"
                    ref={firstNameRef}
                  />
                </div>
                {/* End Form */}
              </div>
              <div className="col-sm-6">
                {/* Form */}
                <div className="mb-4">
                  <label className="form-label" htmlFor="applyForJobLasttName">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="applyForJobNameLastName"
                    id="applyForJobLasttName"
                    placeholder="Last name"
                    aria-label="Last name"
                    ref={lastNameRef}
                  />
                </div>
                {/* End Form */}
              </div>
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobEmail">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="applyForJobNameEmail"
                id="applyForJobEmail"
                placeholder="email@site.com"
                aria-label="email@site.com"
                ref={emailRef}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="phoneNumber"
                className="form-control"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="123 456 7890"
                aria-label="phoneNumber"
                ref={phoneRef}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobEmail">
                Avatar URL
              </label>
              <input
                type="avatar"
                className="form-control"
                name="avatar"
                id="avatar"
                placeholder="https://acme.con/picture-name.png"
                aria-label="https://acme.con/picture-name.png"
                ref={avatarRef}
              />
            </div>
            {/* End Form */}
            <hr className="my-7" />
            <div className="mb-4">
              <h3>Profile</h3>
            </div>
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="applyForJobSummary">
                Summary
              </label>
              <textarea
                className="form-control"
                name="applyForJobSummaryName"
                id="applyForJobSummary"
                placeholder="In a few words, tell us about yourself"
                aria-label="In a few words, tell us about yourself"
                rows={6}
                defaultValue={""}
                ref={bioRef}
              />
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-4">
              <label className="form-label" htmlFor="resumeLink">
                Resume URL
              </label>
              <input
                type="resumeLink"
                className="form-control"
                name="resumeLink"
                id="resumeLink"
                placeholder="Link to hosted resume"
                aria-label="Link to hosted resume"
                ref={resumeLinkRef}
              />
            </div>
            {/* End Form */}
            <div className="d-grid mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Create Profile
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

export default Onboard;
