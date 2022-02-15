// contract/assembly/index.ts
import { Job, PartialJob } from "./model";
import { User, PartialUser } from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.

// Handlers for Jobs
export function createJob(
  postedBy: u32,
  title: string,
  salary: string,
  createdAt: string,
  type: string,
  location: string,
  isRemote: bool,
  organization: string
): Job {
  // use the Job class to persist the job data
  return Job.insert(
    postedBy,
    title,
    salary,
    createdAt,
    type,
    location,
    isRemote,
    organization
  );
}

export function getJobById(id: u32): Job {
  return Job.findById(id);
}

export function getJobs(offset: u32, limit: u32 = 10): Job[] {
  return Job.find(offset, limit);
}

export function updateJob(id: u32, updates: PartialJob): Job {
  return Job.findByIdAndUpdate(id, updates);
}

export function deleteJob(id: u32): void {
  Job.findByIdAndDelete(id);
}

// Handlers for Users
export function createUser(
  name: string,
  bio: string,
  avatar: string,
  resume: string
): User {
  return User.insert(name, bio, avatar, resume);
}

export function getUserById(id: u32): User {
  return User.findById(id);
}

export function getUsers(offset: u32, limit: u32 = 10): User[] {
  return User.find(offset, limit);
}

export function updateUser(id: u32, updates: PartialUser): User {
  return User.findByIdAndUpdate(id, updates);
}

export function deleteUser(id: u32): void {
  User.findByIdAndDelete(id);
}

export function jobsPostedByUser(id: u32): Job[] {
  return Job.findByPostedUserId(id, 50);
}

export function jobsAppliedByUser(id: u32): Job[] {
  return User.findJobsAppliedByUser(id, 50);
}
