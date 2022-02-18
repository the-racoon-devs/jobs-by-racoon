import {
  createJob,
  getJobById,
  getJobs,
  updateJob,
  deleteJob,
  getJobsCount,
  // getJobsPostedByUser,
  // getJobsAppliedByUser,
} from "../index";
import { Job, jobs, PartialJob } from "../model";

export const jobTests = (): void => {
  describe("job contract methods", () => {
    it("creates a job", () => {
      // call the create method
      const job = createJob(
        "racoondevs.testnet",
        "Software Engineer",
        "50k-100k",
        "2022-03-14T23:45:23+05:30",
        "full-time",
        "San Francisco",
        false,
        "Zoho Corp",
        "https://www.zoho.com/logo.png"
      );

      // lookup in the PersistentUnorderedMap for our job
      // expect the persisted job to equal the job returned
      // by the create method above.
      expect(jobs.getSome(job.id)).toStrictEqual(job);
      expect(getJobsCount()).toStrictEqual(1);
    });

    it("gets a job by id", () => {
      // create three jobs
      const jobA = createJob(
        "racoondevs.testnet",
        "Software Engineer",
        "50k-100k",
        "2022-03-14T23:45:23+05:30",
        "full-time",
        "San Francisco",
        false,
        "Zoho Corp",
        "https://www.zoho.com/logo.png"
      );

      const jobB = createJob(
        "racoondevs.testnet",
        "UX/UI Designer",
        "150k-200k",
        "2022-03-14T23:45:23+05:30",
        "part-time",
        "Illinois",
        true,
        "Freshworks",
        "https://www.freshworks.com/logo.png"
      );

      // get each job by its it
      expect(getJobById(jobA.id)).toStrictEqual(jobA);
      expect(getJobById(jobB.id)).toStrictEqual(jobB);
    });

    it("gets a list of jobs", () => {
      const jobs = new Array<number>(100)
        .fill(0)
        .map<Job>((_, i) =>
          Job.insert(
            "racoondevs.testnet",
            "UX/UI Designer" + i.toString(),
            "150k-200k",
            "2022-03-14T23:45:23+05:30",
            "part-time",
            "Illinois",
            true,
            "Freshworks",
            "https://www.freshworks.com/logo.png"
          )
        );

      expect(getJobs()).toStrictEqual(jobs);
    });

    // it("gets a list of jobs posted by user", () => {
    //   const jobs = new Array<number>(100)
    //     .fill(0)
    //     .map<Job>((_, i) =>
    //       Job.insert(
    //         "racoondevs.testnet",
    //         "UX/UI Designer" + i.toString(),
    //         "150k-200k",
    //         "2022-03-14T23:45:23+05:30",
    //         "part-time",
    //         "Illinois",
    //         true,
    //         "Freshworks",
    //         "https://www.freshworks.com/logo.png"
    //       )
    //     );

    //   expect(getJobsPostedByUser("racoondevs.testnet")).toStrictEqual(jobs);
    // });

    // it("gets a list of jobs applied by user", () => {
    //   const job = createJob(
    //     "racoondevs.testnet",
    //     "Software Engineer",
    //     "50k-100k",
    //     "2022-03-14T23:45:23+05:30",
    //     "full-time",
    //     "San Francisco",
    //     false,
    //     "Zoho Corp",
    //     "https://www.zoho.com/logo.png"
    //   );

    //   const updatedJob = new PartialJob();
    //   updatedJob.applicants = ["racoondevs.testnet"];
    //   updateJob(job.id, updatedJob);

    //   expect(getJobsPostedByUser("racoondevs.testnet")[0]).toStrictEqual(job);
    // });

    it("updates a job", () => {
      const job = createJob(
        "racoondevs.testnet",
        "UX/UI Designer",
        "150k-200k",
        "2022-03-14T23:45:23+05:30",
        "part-time",
        "Illinois",
        true,
        "Freshworks",
        "https://www.freshworks.com/logo.png"
      );

      const updatedJob = new PartialJob();
      updatedJob.postedBy = job.postedBy;
      updatedJob.title = "Graphic Designer";
      updatedJob.salary = job.salary;
      updatedJob.type = job.type;
      updatedJob.location = job.location;
      updatedJob.isRemote = false;
      updatedJob.organization = job.organization;
      updatedJob.applicants = ["racoondevs.testnet"];

      updateJob(job.id, updatedJob);

      const jobAfterUpdate = Job.findById(job.id);

      expect(jobAfterUpdate.id).toStrictEqual(job.id);
      expect(jobAfterUpdate.title).toStrictEqual("Graphic Designer");
      expect(jobAfterUpdate.isRemote).toStrictEqual(false);
      expect(jobAfterUpdate.applicants[0]).toStrictEqual("racoondevs.testnet");
    });

    itThrows("deletes a job", () => {
      const job = Job.insert(
        "racoondevs.testnet",
        "UX/UI Designer",
        "150k-200k",
        "2022-03-14T23:45:23+05:30",
        "part-time",
        "Illinois",
        true,
        "Freshworks",
        "https://www.freshworks.com/logo.png"
      );

      deleteJob(job.id);

      Job.findById(job.id);
    });
  });
};
