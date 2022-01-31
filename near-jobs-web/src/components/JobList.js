// src/components/JobList.js
import { useEffect, useState } from "react";
import { Job } from "./Job";

const PER_PAGE_LIMIT = 3;

const JobList = ({ contract }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let offset;
    if (page < 1) {
      setPage(1);
      offset = 0;
    } else {
      offset = (page - 1) * PER_PAGE_LIMIT;
    }

    // every second after the component first mounts
    // update the list of jobs by invoking the get
    // method on the smart contract
    const id = setInterval(() => {
      contract
        .get({ offset, limit: PER_PAGE_LIMIT })
        .then((jobs) => setJobs(jobs));
    }, 1000);

    return () => clearInterval(id);
  }, [page, contract]);

  return (
    <ul>
      <div className="flex">Current Page: {page}</div>
      <button onClick={() => setPage((page) => page - 1)}>&lt;</button>{" "}
      <button onClick={() => setPage((page) => page + 1)}>&gt;</button>
      {jobs.map((job) => (
        <li key={job.id}>
          <Job contract={contract} {...job} />
        </li>
      ))}
    </ul>
  );
};

export default JobList;
