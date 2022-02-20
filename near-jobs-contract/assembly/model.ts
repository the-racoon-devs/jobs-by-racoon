// contract/assembly/model.ts
import { storage, PersistentUnorderedMap, math } from "near-sdk-as";

export const jobs = new PersistentUnorderedMap<u32, Job>("jobs");
export const users = new PersistentUnorderedMap<string, User>("users");

// Partials
@nearBindgen
export class PartialUser {
  firstName: string;
  lastName: string;
  bio: string;
  avatar: string;
  resume: string;
  email: string;
  phone: string;
}

@nearBindgen
export class User {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  avatar: string;
  resume: string;
  email: string;
  phone: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    bio: string,
    avatar: string,
    resume: string,
    email: string,
    phone: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.avatar = avatar;
    this.resume = resume;
    this.email = email;
    this.phone = phone;
  }

  static insert(
    id: string,
    firstName: string,
    lastName: string,
    bio: string,
    avatar: string,
    resume: string,
    email: string,
    phone: string
  ): User {
    // create a new Job
    const user = new User(
      id,
      firstName,
      lastName,
      bio,
      avatar,
      resume,
      email,
      phone
    );
    users.set(user.id, user);

    // increment the users count
    const usersCount = storage.getPrimitive<i32>("usersCounter", 0) + 1;
    storage.set<i32>("usersCounter", usersCount);
    return user;
  }

  static findById(id: string): User {
    // Lookup a job in the PersistentUnorderedMap by its id.
    return users.getSome(id);
  }

  static find(): User[] {
    // the PersistentUnorderedMap values method will
    // takes two parameters: start and end. we'll start
    // at the offset (skipping all jobs before the offset)
    // and collect all jobs until we reach the offset + limit
    // job. For example, if offset is 10 and limit is 3 then
    // this would return the 10th, 11th, and 12th job.
    const usersCount = storage.getPrimitive<i32>("usersCounter", 0);
    return users.values(0, usersCount + 1);
  }

  static findByIdAndUpdate(id: string, partial: PartialUser): User {
    // find a job by its id
    const user = this.findById(id);

    // update the job in-memory
    user.avatar = partial.avatar;
    user.bio = partial.bio;
    user.firstName = partial.firstName;
    user.lastName = partial.lastName;
    user.resume = partial.resume;
    user.email = partial.email;
    user.phone = partial.phone;

    // persist the updated job
    users.set(id, user);
    return user;
  }

  static findByIdAndDelete(id: string): void {
    users.delete(id);
    // Decrement the users count
    const usersCount = storage.getPrimitive<i32>("usersCounter", 0) - 1;
    storage.set<i32>("usersCount", usersCount);
  }

  static getUsersCount(): i32 {
    return storage.getPrimitive<i32>("usersCounter", 0);
  }
}

@nearBindgen
export class PartialJob {
  postedBy: string;
  title: string;
  salary: string;
  type: string;
  location: string;
  isRemote: bool;
  organization: string;
  organizationLogoUrl: string;
  applicants: string[];
}

@nearBindgen
export class Job {
  id: u32;
  postedBy: string;
  title: string;
  organization: string;
  organizationLogoUrl: string;
  salary: string;
  createdAt: string;
  type: string;
  location: string;
  isRemote: bool;
  applicants: string[];

  constructor(
    postedBy: string,
    title: string,
    salary: string,
    createdAt: string,
    type: string,
    location: string,
    isRemote: bool,
    organization: string,
    organizationLogo: string
  ) {
    this.id = math.hash32<string>(title + organization + createdAt);
    this.postedBy = postedBy;
    this.title = title;
    this.salary = salary;
    this.createdAt = createdAt;
    this.type = type;
    this.location = location;
    this.isRemote = isRemote;
    this.organization = organization;
    this.organizationLogoUrl = organizationLogo;
    this.applicants = [];
  }

  static insert(
    postedBy: string,
    title: string,
    salary: string,
    createdAt: string,
    type: string,
    location: string,
    isRemote: bool,
    organization: string,
    organizationLogo: string
  ): Job {
    // create a new Job
    const job = new Job(
      postedBy,
      title,
      salary,
      createdAt,
      type,
      location,
      isRemote,
      organization,
      organizationLogo
    );

    // add the job to the PersistentUnorderedMap
    // where the key is the job's id and the value
    // is the job itself. Think of this like an
    // INSERT statement in SQL.
    jobs.set(job.id, job);

    // increment the jobs count
    const jobsCount = storage.getPrimitive<i32>("jobsCounter", 0) + 1;
    storage.set<i32>("jobsCounter", jobsCount);

    return job;
  }

  static findById(id: u32): Job {
    // Lookup a job in the PersistentUnorderedMap by its id.
    // This is like a SELECT * FROM jobs WHERE id=?
    return jobs.getSome(id);
  }

  static find(): Job[] {
    // the PersistentUnorderedMap values method will
    // takes two parameters: start and end. we'll start
    // at the offset (skipping all jobs before the offset)
    // and collect all jobs until we reach the offset + limit
    // job. For example, if offset is 10 and limit is 3 then
    // this would return the 10th, 11th, and 12th job.
    const jobsCount = storage.getPrimitive<i32>("jobsCounter", 0);
    return jobs.values(0, jobsCount + 1);
  }

  static findByIdAndUpdate(id: u32, partial: PartialJob): Job {
    // find a job by its id
    const job = this.findById(id);

    // update the job in-memory
    job.title = partial.title;
    job.salary = partial.salary;
    job.type = partial.type;
    job.location = partial.location;
    job.isRemote = partial.isRemote;
    job.organization = partial.organization;
    job.organizationLogoUrl = partial.organizationLogoUrl;
    job.applicants = partial.applicants;

    // persist the updated job
    jobs.set(id, job);

    return job;
  }

  static findByIdAndDelete(id: u32): void {
    jobs.delete(id);

    // Decrement the jobs count
    const jobsCount = storage.getPrimitive<i32>("jobsCounter", 0) - 1;
    storage.set<i32>("jobsCounter", jobsCount);
  }

  static addApplicant(id: u32, userId: string): void {
    const job = this.findById(id);
    job.applicants.push(userId);
    jobs.set(id, job);
  }

  static getJobsCount(): i32 {
    return storage.getPrimitive<i32>("jobsCounter", 0);
  }
}
