type PositiveNumber = number & { __positive: true };
type UniqueID = number & { __unique: true; __positive: true };

type Role = 'Manager' | 'Agent' | 'People';

export type { PositiveNumber, UniqueID, Role };