import * as buffer from "buffer";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const SignInPage = ({ currentUser, contract, nearConfig, wallet }) => {
  window.Buffer = buffer.Buffer;
  const history = useHistory();
  const [profile, setProfile] = useState();

  console.log(contract);

  useEffect(() => {
    if (
      localStorage.currentUser !== undefined ||
      localStorage.currentUser !== null
    ) {
      console.log("123");
      // Get profile
      contract
        .getUserById({ id: localStorage.currentUser })
        .then((userObject) => {
          setProfile(userObject);
          console.log(userObject);
          console.log("456");
          if (userObject === null || userObject === undefined) {
            history.push("/dashboard/onboard");
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
      // history.push("/dashboard/listings");
    }

    console.log(profile);
  }, [contract, profile, history]);

  function signIn() {
    wallet.requestSignIn(nearConfig.contractName, "NEAR Guest Book");
    console.log(currentUser);
    localStorage.currentUser = currentUser.accountId;
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
