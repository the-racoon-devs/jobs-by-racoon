import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Listings from "../Listings/Index";
import CreateJob from "../CreateJob/Index";
import CreatedJobs from "../CreatedJobs/Index";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main id="content" role="main">
        <Switch>
          <Route exact path="/dashboard/listings" component={Listings} />
          {/* <Route exact path="/dashboard/listings/grid" component={Listings} /> */}
          <Route exact path="/dashboard/create-job" component={CreateJob} />
          <Route exact path="/dashboard/created-jobs" component={CreatedJobs} />
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
