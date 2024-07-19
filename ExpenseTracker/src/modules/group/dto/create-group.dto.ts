import { generalUserDto } from "modules/user/dto/general-user.dto";
import { zodEmptyObject } from "utilities/general-zod-types";
import { z } from "zod";

const zodSpenderType = z.union([generalUserDto, zodEmptyObject]);

export const createGroupDto = z.object({
  cost: z.number().min(1),
  spender: zodSpenderType,
  otherUsers: z.array(zodSpenderType),
});

export type CreateGroupDto = z.infer<typeof createGroupDto>;
