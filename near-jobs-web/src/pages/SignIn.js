import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as buffer from "buffer";

const SignInPage = ({ currentUser, contract, nearConfig, wallet }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();
  const [profile, setProfile] = useState();

  // console.log(contract);

  useEffect(() => {
    if (wallet.isSignedIn()) {
      localStorage.currentUser = currentUser.accountId;
      history.push("/dashboard/listings");
    }
  }, []);

  useEffect(() => {
    if (
      (localStorage.currentUser !== undefined ||
        localStorage.currentUser !== null) &&
      (currentUser !== undefined || currentUser !== null)
    ) {
      // Get profile
      contract
        .getUserById({ id: localStorage.currentUser })
        .then((userObject) => {
          console.log("profile", userObject);
          setProfile(userObject);
          if (userObject === null || userObject === undefined) {
            history.push("/dashboard/onboard");
          } else {
            history.push("/dashboard/listings");
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
    }
  }, []);

  function signIn() {
    wallet.requestSignIn(nearConfig.contractName, "Jobs by Racoon");
    console.log(currentUser);
  }

  return (
    <div className="min-vh-100 d-flex flex-column">
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
                src={require("../images/logo.png")}
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
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Collapse */}
          </nav>
        </div>
      </header>
      <div
        className="flex-grow-1 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="col-xl-2 text-center">
          <img
            src="https://docs.near.org/img/near_logo.svg"
            alt="NEAR"
            style={{ height: "32px" }}
          />{" "}
          <button
            onClick={signIn}
            className="mt-3 btn btn-primary w-100"
            type="button"
          >
            Sign In With NEAR Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
