export interface IUser {
  id: number;
  name: string;
}

export interface ILevel {
  xp: number;
  progress: number;
  current: number;
  next_level_value: number;
}

export interface IBalance {
  soft: number;
  hard: number;
}

export interface IPower {
  current: number;
  max: number;
}

export interface ITap {
  current: number;
}

export interface ILootBox {
  balance: {
    soft: number;
    hard: number;
  };
}
