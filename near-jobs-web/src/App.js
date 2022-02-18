import "regenerator-runtime/runtime";
import PropTypes from "prop-types";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import Landing from "./pages/Landing/Index";
import DashboardLayout from "./pages/DashboardLayout/Index";

function App({ contract, currentUser, nearConfig, wallet }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          exact
          path="/sign-in"
          component={() => (
            <SignInPage
              currentUser={currentUser}
              nearConfig={nearConfig}
              wallet={wallet}
              contract={contract}
            />
          )}
        />
        <Route
          path="/dashboard"
          component={() => <DashboardLayout contract={contract} />}
        />
      </Switch>
    </Router>
  );
}

App.propTypes = {
  // contract: PropTypes.shape({
  //   create: PropTypes.func.isRequired,
  //   get: PropTypes.func.isRequired,
  //   update: PropTypes.func.isRequired,
  //   del: PropTypes.func.isRequired,
  // }).isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired,
  }),
  nearConfig: PropTypes.shape({
    contractName: PropTypes.string.isRequired,
  }).isRequired,
  wallet: PropTypes.shape({
    requestSignIn: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
