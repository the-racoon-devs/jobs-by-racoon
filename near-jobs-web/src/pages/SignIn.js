import * as buffer from "buffer";

const SignInPage = ({ nearConfig, wallet }) => {
  function signIn() {
    window.Buffer = buffer.Buffer;
    wallet.requestSignIn(nearConfig.contractName, "NEAR Guest Book");
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
