import { create } from "zustand";

// Definindo o estado da loja Zustand
interface Store {
  user: { name: string; age: string };
  users: { name: string; age: string }[];
  setUser: (user: { name: string; age: string }) => void;
  addUser: (user: { name: string; age: string }) => void;
  removeUser: (index: number) => void;
}

export const useStore = create<Store>((set) => ({
  user: { name: "", age: "" },
  users: [],
  setUser: (user) => set({ user }), // Atualiza o estado do formulário
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index),
    })),
}));