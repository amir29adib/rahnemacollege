import { generalUserDto } from "modules/user/dto/general-user.dto";
import { z } from "zod";

export const createExpenseDto = z.object({
  cost: z.number().min(1),
  group_id: z.string().min(1),
  spender: generalUserDto,
});

export type CreateExpenseDto = z.infer<typeof createExpenseDto>;
