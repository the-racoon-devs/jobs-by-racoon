// contract/assembly/model.ts
import { PersistentUnorderedMap, math } from "near-sdk-as";

export const jobs = new PersistentUnorderedMap<u32, Job>("jobs");

@nearBindgen
export class PartialJob {
  task: string;
  done: bool;
}

@nearBindgen
export class Job {
  id: u32;
  task: string;
  done: bool;

  constructor(task: string) {
    this.id = math.hash32<string>(task);
    this.task = task;
    this.done = false;
  }

  static insert(task: string): Job {
    // create a new Job
    const job = new Job(task);

    // add the job to the PersistentUnorderedMap
    // where the key is the job's id and the value
    // is the job itself. Think of this like an
    // INSERT statement in SQL.
    jobs.set(job.id, job);

    return job;
  }

  static findById(id: u32): Job {
    // Lookup a job in the PersistentUnorderedMap by its id.
    // This is like a SELECT * FROM jobs WHERE id=?
    return jobs.getSome(id);
  }

  static find(offset: u32, limit: u32): Job[] {
    // the PersistentUnorderedMap values method will
    // takes two parameters: start and end. we'll start
    // at the offset (skipping all jobs before the offset)
    // and collect all jobs until we reach the offset + limit
    // job. For example, if offset is 10 and limit is 3 then
    // this would return the 10th, 11th, and 12th job.
    return jobs.values(offset, offset + limit);
  }

  static findByIdAndUpdate(id: u32, partial: PartialJob): Job {
    // find a job by its id
    const job = this.findById(id);

    // update the job in-memory
    job.task = partial.task;
    job.done = partial.done;

    // persist the updated job
    jobs.set(id, job);

    return job;
  }

  static findByIdAndDelete(id: u32): void {
    jobs.delete(id);
  }
}
