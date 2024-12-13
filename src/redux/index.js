import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./projectsSlise";

export const store = configureStore({
  reducer: {
    projects: projectsSlice,
  },
});
