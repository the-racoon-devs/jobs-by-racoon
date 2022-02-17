// contract/assembly/index.ts
import {
  Job,
  PartialJob,
  User,
  PartialUser,
  jobsCount,
  usersCount,
} from "./model";

// export the create method. This acts like an endpoint
// that we'll be able to call from our web app.

export function getJobsCount(): u32 {
  return jobsCount;
}

export function getUsersCount(): u32 {
  return usersCount;
}

// Handlers for Jobs
export function createJob(
  postedBy: string,
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

export function getJobs(): Job[] {
  return Job.find();
}

export function updateJob(id: u32, updates: PartialJob): Job {
  return Job.findByIdAndUpdate(id, updates);
}

export function deleteJob(id: u32): string {
  return Job.findByIdAndDelete(id);
}

// Handlers for Users
export function createUser(
  id: string,
  firstName: string,
  lastName: string,
  bio: string,
  avatar: string,
  resume: string,
  email: string,
  phone: string
): User {
  return User.insert(
    id,
    firstName,
    lastName,
    bio,
    avatar,
    resume,
    email,
    phone
  );
}

export function getUserById(id: string): User {
  return User.findById(id);
}

export function getUsers(): User[] {
  return User.find();
}

export function updateUser(id: string, updates: PartialUser): User {
  return User.findByIdAndUpdate(id, updates);
}

export function deleteUser(id: string): string {
  return User.findByIdAndDelete(id);
}

export function addApplicant(id: u32, userId: string): void {
  Job.addApplicant(id, userId);
}

export function jobsPostedByUser(id: string): Job[] {
  return User.findByPostedUserId(id);
}

export function jobsAppliedByUser(id: string): Job[] {
  return User.findJobsAppliedByUser(id);
}
