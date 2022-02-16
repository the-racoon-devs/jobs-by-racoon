// contract/assembly/model.ts
import { PersistentUnorderedMap, math } from "near-sdk-as";

export const jobs = new PersistentUnorderedMap<u32, Job>("jobs");
export const users = new PersistentUnorderedMap<string, User>("users");

// Partials
@nearBindgen
export class PartialUser {
  name: string;
  bio: string;
  avatar: string;
  resume: string;
}

@nearBindgen
export class User {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  resume: string;

  constructor(
    id: string,
    name: string,
    bio: string,
    avatar: string,
    resume: string
  ) {
    this.id = id;
    this.name = name;
    this.bio = bio;
    this.avatar = avatar;
    this.resume = resume;
  }

  static insert(
    id: string,
    name: string,
    bio: string,
    avatar: string,
    resume: string
  ): User {
    // create a new Job
    const user = new User(id, name, bio, avatar, resume);
    users.set(user.id, user);
    return user;
  }

  static findById(id: string): User {
    // Lookup a job in the PersistentUnorderedMap by its id.
    return users.getSome(id);
  }

  static find(offset: u32, limit: u32): User[] {
    // the PersistentUnorderedMap values method will
    // takes two parameters: start and end. we'll start
    // at the offset (skipping all jobs before the offset)
    // and collect all jobs until we reach the offset + limit
    // job. For example, if offset is 10 and limit is 3 then
    // this would return the 10th, 11th, and 12th job.
    return users.values(offset, offset + limit);
  }

  static findByIdAndUpdate(id: string, partial: PartialUser): User {
    // find a job by its id
    const user = this.findById(id);

    // update the job in-memory
    user.avatar = partial.avatar;
    user.bio = partial.bio;
    user.name = partial.name;
    user.resume = partial.resume;

    // persist the updated job
    users.set(id, user);

    return user;
  }

  static findByIdAndDelete(id: string): void {
    users.delete(id);
  }

  static findJobsAppliedByUser(userId: string, limit: u32): Job[] {
    var result = jobs.values(0, limit);
    var jobsAppliedByUser = new Array<Job>(50);

    for (var i = 0; i < result.length; i++) {
      if (result[i].applicants.includes(userId)) {
        jobsAppliedByUser.push(result[i]);
      }
    }
    return jobsAppliedByUser;
  }
}

@nearBindgen
export class PartialJob {
  title: string;
  salary: string;
  type: string;
  location: string;
  isRemote: bool;
  organization: string;
  applicants: string[];
}

@nearBindgen
export class Job {
  id: u32;
  postedBy: string;
  title: string;
  organization: string;
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
    organization: string
  ) {
    this.id = math.hash32<string>(title + organization);
    this.postedBy = postedBy;
    this.title = title;
    this.salary = salary;
    this.createdAt = createdAt;
    this.type = type;
    this.location = location;
    this.isRemote = isRemote;
    this.organization = organization;
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
    organization: string
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
      organization
    );

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

  static findByPostedUserId(postedBy: string, limit: u32): Job[] {
    // Gets Jobs posted by a specific user.
    var result = jobs.values(0, 0 + limit);
    var jobsPostedByUser = new Array<Job>(50);
    for (var i = 0; i < result.length; i++) {
      if (result[i].postedBy == postedBy) {
        jobsPostedByUser.push(result[i]);
      }
    }
    return jobsPostedByUser;
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
    job.title = partial.title;
    job.salary = partial.salary;
    job.type = partial.type;
    job.location = partial.location;
    job.isRemote = partial.isRemote;
    job.organization = partial.organization;
    job.applicants = partial.applicants;

    // persist the updated job
    jobs.set(id, job);

    return job;
  }

  static findByIdAndDelete(id: u32): void {
    jobs.delete(id);
  }
}
