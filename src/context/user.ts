import { create } from "zustand";

const DEFAULT_USER = {
  name: "",
  email: "",
  phone: "",
};

type User = {
  name: string;
  email: string;
  phone: string;
};

type Store = {
  user: User;
  setUser: (payload: User) => void;
};

export const useUser = create<Store>()((set) => ({
  user: DEFAULT_USER,
  setUser: (payload: User) =>
    set(() => ({
      user: {
        ...payload,
      },
    })),
}));
