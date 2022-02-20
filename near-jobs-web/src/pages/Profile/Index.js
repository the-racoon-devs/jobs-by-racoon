import * as buffer from "buffer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const EditProfile = ({ contract }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  function updateProfile(e, contract) {
    e.preventDefault();
    const updatedProfile = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      avatar: avatar,
      resume: resumeLink,
      email: email,
      phone: phone,
    };

    console.log(contract);
    console.log(updatedProfile);

    // Call contract method to create user
    contract
      .updateUser({ id: localStorage.currentUser, updates: updatedProfile })
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
        if (userObject === null || userObject === undefined) {
          history.push("/dashboard/onboard");
        } else {
          setFirstName(userObject.firstName);
          setLastName(userObject.lastName);
          setPhone(userObject.phone);
          setEmail(userObject.email);
          setBio(userObject.bio);
          setAvatar(userObject.avatar);
          setResumeLink(userObject.resume);

          console.log(userObject);
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
          history.push("/dashboard/onboard");
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
          <form onSubmit={(e) => updateProfile(e, contract)}>
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
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName || ""}
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
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName || ""}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone || ""}
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
                onChange={(e) => setAvatar(e.target.value)}
                value={avatar || ""}
              />
              <img
                style={{ height: "200px" }}
                className="rounded mt-3"
                src={
                  avatar ||
                  "https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg"
                }
                alt=""
                srcset=""
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
                onChange={(e) => setBio(e.target.value)}
                value={bio || ""}
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
                onChange={(e) => setResumeLink(e.target.value)}
                value={resumeLink || ""}
              />
            </div>
            {/* End Form */}
            <div className="d-grid mt-5">
              <button type="submit" className="btn btn-primary btn-lg">
                Update Profile
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

export default EditProfile;