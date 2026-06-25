import { create } from "zustand";

const useStore = create((set) => ({
  // User Data
  user: {
    name: "",
    username: "",
    email: "",
    mobile: "",
  },

  // Selected Categories
  categories: [],

  // Notes
  notes: localStorage.getItem("super_app_notes") || "",

  // Authentication
  isLoggedIn: false,

  // Actions
  setUser: (userData) =>
    set({
      user: userData,
    }),

  setCategories: (selectedCategories) =>
    set({
      categories: selectedCategories,
    }),

  setNotes: (noteText) => {
    localStorage.setItem("super_app_notes", noteText);

    set({
      notes: noteText,
    });
  },

  login: () =>
    set({
      isLoggedIn: true,
    }),

  logout: () =>
    set({
      isLoggedIn: false,
      user: {
        name: "",
        username: "",
        email: "",
        mobile: "",
      },
      categories: [],
      notes: "",
    }),
}));

export default useStore;