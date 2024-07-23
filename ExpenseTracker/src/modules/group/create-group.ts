import { v4 } from "uuid";
import { HttpError } from "utilities/http-error";
import { CreateGroupDto } from "./dto/create-group.dto";
import { Group, groups } from "models/group.model";
import { users } from "models/user.model";

export const createGroup = (dto: CreateGroupDto): string => {
  
  const sortedNewIds = [...dto.user_ids].sort();
  const existNewUserId = groups.filter((item) => {
    const sortedGroupIds = [...item.user_ids].sort();
    return (
      sortedGroupIds.length === sortedNewIds.length &&
      sortedGroupIds.every((id, index) => id === sortedNewIds[index])
    );
  });

  // console.log(
  //   groups.some((item) => {
  //     return [...item.user_ids].sort();
  //   })
  // );

  console.log(sortedNewIds);

  // console.log(existNewUserId);

  const usersIds = users.map((item) => item.id);
  const unknownUserId = dto.user_ids.find(
    (user_id) => !usersIds.includes(user_id)
  );

  if (unknownUserId !== undefined) {
    throw new HttpError(400, `User_id ${unknownUserId} is not found`);
  }

  const group: Group = {
    id: v4(),
    user_ids: dto.user_ids,
  };

  groups.push(group);

  return group.id;
};
