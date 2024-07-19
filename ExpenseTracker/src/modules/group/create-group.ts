import { v4 as uuidv4 } from "uuid";
import { users } from "models/user.model";
import { HttpError } from "utilities/http-error";
import { CreateGroupDto } from "./dto/create-group.dto";
import { isGeneralUserDto } from "modules/user/dto/general-user.dto";
import { Group, groups } from "models/group.model";

export const createGroup = (dto: CreateGroupDto): string => {
  if (dto.cost <= 0) {
    throw new HttpError(400, "Price must be positive number!");
  }

  if (Object.keys(dto.spender).length === 0) {
    throw new HttpError(400, "Spender can not be empty!");
  }

  const checkEmptyOtherUsers = dto.otherUsers.find(
    (item) => Object.keys(item).length === 0
  );

  if (checkEmptyOtherUsers !== undefined) {
    throw new HttpError(400, "No items from this otherUsers can be empty!");
  }

  if (isGeneralUserDto(dto.spender)) {
    const spenderObject = dto.spender;
    const checkSpenderExist = users.find(
      (item) => item.id === spenderObject.id
    );
    if (checkSpenderExist === undefined) {
      throw new HttpError(400, "Spender does not exist!");
    }
  }

  const group = {
    id: uuidv4(),
  }
//     cost: dto.cost,
//     spender: dto.spender,
//     otherUsers: dto.otherUsers,
//   };

//   groups.push(group);

  return group.id;
};
