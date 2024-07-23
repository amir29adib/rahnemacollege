import { createGroup } from "modules/group/create-group";
import { HttpError } from "utilities/http-error";

describe("Create Group", () => {
  it("should not create if one user_ids is repetitious", () => {
    createGroup({
      user_ids: ["hfchnfbgf356y5gfbsdc3sdc", "bddfsdnfbgf356y5gfbsdc3sdc"],
    });
    expect(() =>
      createGroup({
        user_ids: ["hfchnfbgf356y5gfbsdc3sdc", "bddfsdnfbgf356y5gfbsdc3sdc"],
      })
    ).toThrow(HttpError);
  });

  it("should not create if at least one item of user_ids does not exist!", () => {
    expect(() =>
      createGroup({
        user_ids: ["kdghbffgngghmkhllacfb"],
      })
    ).toThrow(HttpError);
  });
});
