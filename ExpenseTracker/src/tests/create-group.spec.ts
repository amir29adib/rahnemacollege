import { createGroup } from "modules/group/create-group";
import { createUser } from "modules/user/create-user";
import { HttpError } from "utilities/http-error";

describe("Create Group", () => {
  it("should not create if cost is not positive", () => {
    expect(() =>
      createGroup({
        cost: 0,
        spender: {
          id: "abbfdert231dcsdc3sdc",
          username: "ali",
          password: "ali1234",
        },
        otherUsers: [
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
    expect(() =>
      createGroup({
        cost: -10,
        spender: {
          id: "abbfdert231dcsdc3sdc",
          username: "ali",
          password: "ali1234",
        },
        otherUsers: [
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
  });

  it("should not create if spenser is empty", () => {
    expect(() =>
      createGroup({
        cost: 10000,
        spender: {},
        otherUsers: [
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
  });

  it("should not create if at least one item of otherUsers is empty", () => {
    expect(() =>
      createGroup({
        cost: 10000,
        spender: {
          id: "abbfdert231dcsdc3sdc",
          username: "ali",
          password: "ali1234",
        },
        otherUsers: [
          {},
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
  });

  it("should not create if the spender does not exist!", () => {
    expect(() =>
      createGroup({
        cost: 10000,
        spender: {
          id: "bghcaddf3936y5gfbsdc3sdc",
          username: "omid",
          password: "omid1234",
        },
        otherUsers: [
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
  });

  it("should not create if at least one item of otherUsers does not exist!", () => {
    const userOneId = createUser({
      username: "omid",
      password: "omid1234",
    });
    expect(() =>
      createGroup({
        cost: 10000,
        spender: {
          id: userOneId,
          username: "omid",
          password: "omid1234",
        },
        otherUsers: [
          {
            id: "hfchnfbgf356y5gfbsdc3sdc",
            username: "amir",
            password: "amir1234",
          },
        ],
      })
    ).toThrow(HttpError);
  });
});
