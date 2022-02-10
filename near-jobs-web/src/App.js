import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import SignInPage from "./pages/SignIn";
import Landing from "./pages/Landing/Index";
import DashboardLayout from "./pages/DashboardLayout/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route path="/dashboard" component={DashboardLayout} />
      </Switch>
    </Router>
  );
}

export default App;
