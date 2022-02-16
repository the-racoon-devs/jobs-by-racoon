import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from "../index";
import { User, users, PartialUser } from "../model";

export const usersTests = (): void => {
  describe("user contract methods", () => {
    it("creates a user", () => {
      // call the create method
      const user = createUser(
        "racoondevs.testnet",
        "John Doe",
        "John Doe is a software engineer",
        "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        "https://www.fabianferno.com/resume.pdf"
      );

      // lookup in the PersistentUnorderedMap for our user
      // expect the persisted user to equal the user returned
      // by the create method above.
      expect(users.getSome(user.id)).toStrictEqual(user);
    });

    it("gets a user by id", () => {
      // create three users
      const userA = createUser(
        "racoondevs.testnet",
        "John Doe",
        "John Doe is a software engineer",
        "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        "https://www.fabianferno.com/resume.pdf"
      );

      const userB = createUser(
        "sigmadevs.testnet",
        "Acme Man",
        "Acme Man is a graphic designer",
        "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        "https://www.acme.com/resume.pdf"
      );

      // get each user by its it
      expect(getUserById(userA.id)).toStrictEqual(userA);
      expect(getUserById(userB.id)).toStrictEqual(userB);
    });

    it("gets a list of users", () => {
      const users = new Array<number>(100)
        .fill(0)
        .map<User>((_, i) =>
          User.insert(
            "racoondevs.testnet" + i.toString(),
            "John Doe",
            "John Doe is a software engineer",
            "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
            "https://www.fabianferno.com/resume.pdf"
          )
        );

      expect(getUsers(20)).toStrictEqual(users.slice(20, 30));
      expect(getUsers(0, 10)).toStrictEqual(users.slice(0, 10));
      expect(getUsers(10, 10)).toStrictEqual(users.slice(10, 20));
      expect(getUsers(50, 50)).toStrictEqual(users.slice(50, 100));
    });

    it("updates a user", () => {
      const user = createUser(
        "racoondevs.testnet",
        "John Doe",
        "John Doe is a software engineer",
        "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        "https://www.fabianferno.com/resume.pdf"
      );

      const updatedUser = new PartialUser();
      updatedUser.name = user.name;
      updatedUser.bio = "He is the man";
      updatedUser.avatar = user.avatar;
      updatedUser.resume = "https://www.johndoe.com/resume.pdf";

      updateUser(user.id, updatedUser);

      const userAfterUpdate = User.findById(user.id);

      expect(userAfterUpdate.id).toStrictEqual(user.id);
      expect(userAfterUpdate.resume).toStrictEqual(
        "https://www.johndoe.com/resume.pdf"
      );
      expect(userAfterUpdate.bio).toStrictEqual("He is the man");
    });

    itThrows("deletes a user", () => {
      const user = User.insert(
        "racoondevs.testnet",
        "John Doe",
        "John Doe is a software engineer",
        "https://avatars2.githubusercontent.com/u/1234?s=460&v=4",
        "https://www.fabianferno.com/resume.pdf"
      );

      deleteUser(user.id);

      User.findById(user.id);
    });
  });
};
