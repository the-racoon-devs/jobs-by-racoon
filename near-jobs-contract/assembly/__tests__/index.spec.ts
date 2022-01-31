// contract/assembly/__tests__/index.spec.ts

import { create, getById, get, update, del } from "../index";
import { Job, jobs } from "../model";

describe("contract methods", () => {
  it("creates a job", () => {
    // call the create method
    const job = create("Drink water");

    // lookup in the PersistentUnorderedMap for our job
    // expect the persisted job to equal the job returned
    // by the create method above.
    expect(jobs.getSome(job.id)).toStrictEqual(job);
  });

  it("gets a job by id", () => {
    // create three jobs
    const a = Job.insert("Drink water");
    const b = Job.insert("Get sleep");
    const c = Job.insert("Exercise");

    // get each job by its it
    expect(getById(a.id)).toStrictEqual(a);
    expect(getById(b.id)).toStrictEqual(b);
    expect(getById(c.id)).toStrictEqual(c);
  });

  it("gets a list of jobs", () => {
    const jobs = new Array<number>(100)
      .fill(0)
      .map<Job>((_, i) => Job.insert("job" + i.toString()));

    expect(get(20)).toStrictEqual(jobs.slice(20, 30));
    expect(get(0, 10)).toStrictEqual(jobs.slice(0, 10));
    expect(get(10, 10)).toStrictEqual(jobs.slice(10, 20));
    expect(get(50, 50)).toStrictEqual(jobs.slice(50, 100));
  });

  it("updates a job", () => {
    const job = Job.insert("Water drink");

    update(job.id, { task: "Drink water", done: true });

    const jobAfterUpdate = Job.findById(job.id);

    expect(jobAfterUpdate.id).toStrictEqual(job.id);
    expect(jobAfterUpdate.task).toStrictEqual("Drink water");
    expect(jobAfterUpdate.done).toStrictEqual(true);
  });

  itThrows("deletes a job", () => {
    const job = Job.insert("Drink water");

    del(job.id);

    Job.findById(job.id);
  });
});
