import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-xl-2 text-center">
        <h4>NEAR Jobs</h4>
        <button
          onClick={signIn}
          className="mt-3 btn btn-primary w-100"
          type="button"
        >
          Sign In With Wallet
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
