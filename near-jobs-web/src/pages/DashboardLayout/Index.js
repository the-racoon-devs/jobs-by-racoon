import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Listings from "../Listings/Index";
import CreateJob from "../CreateJob/Index";
import CreatedJobs from "../CreatedJobs/Index";
import Onboard from "../Onboard/Index";
import Profile from "../Profile/Index";
import MyApplications from "../Profile/MyApplications";
import Job from "../Listings/Job";

const DashboardLayout = ({ contract }) => {
  return (
    <>
      <Header />
      <main id="content" role="main">
        <Switch>
          <Route
            exact
            path="/dashboard/listings"
            component={() => <Listings contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/created-jobs/job/:jobId"
            component={() => <Job contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/create-job"
            component={() => <CreateJob contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/created-jobs"
            component={() => <CreatedJobs contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/my-applications"
            component={() => <MyApplications contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/onboard"
            component={() => <Onboard contract={contract} />}
          />
          <Route
            exact
            path="/dashboard/profile"
            component={() => <Profile contract={contract} />}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
