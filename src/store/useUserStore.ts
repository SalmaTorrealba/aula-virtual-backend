import { create } from "zustand";

interface UserState {
  email: string | null;
  role: "admin" | "student" | "teacher" | null;
  setUser: (email: string, role: "admin" | "student" | "teacher") => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  email: null,
  role: null,

  setUser: (email, role) => set({ email, role }),

  logout: () => set({ email: null, role: null }),
}));

export default useUserStore;
