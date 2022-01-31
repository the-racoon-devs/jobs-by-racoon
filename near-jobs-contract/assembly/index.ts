// contract/assembly/index.ts
import { Job, PartialJob } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.
export function create(task: string): Job {
  // use the Job class to persist the job data
  return Job.insert(task);
}

export function getById(id: u32): Job {
  return Job.findById(id);
}

export function get(offset: u32, limit: u32 = 10): Job[] {
  return Job.find(offset, limit);
}

export function update(id: u32, updates: PartialJob): Job {
  return Job.findByIdAndUpdate(id, updates);
}

export function del(id: u32): void {
  Job.findByIdAndDelete(id);
}
