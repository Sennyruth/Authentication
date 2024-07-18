import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
    auth: false,
  
    setAuth: (newAuth) => {
      set(() => {
        return { auth: newAuth};
      });
    },
  });

const useAuthStore = create(devtools(persist(authStore, {name: 'Auth'})))
export default useAuthStore;