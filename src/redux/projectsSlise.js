import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "projects/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios("http://localhost:3001/projects");
      if (response.status !== 200) throw new Error("Error server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSingleData = createAsyncThunk(
  "projects/geSingletData",
  async (id, { rejectWithValue, getState }) => {
    try {
      const response = await axios(`http://localhost:3001/projects?id=${id}`);
      if (response.status !== 200) throw new Error("Error server");

      return response.data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Добавление
export const postData = createAsyncThunk(
  "projects/postData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/projects", data);

      if (response.status < 200 || response.status >= 300)
        throw new Error("Error server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// изменение поля
export const changeFieldData = createAsyncThunk(
  "projects/changeFieldData",
  async ([id, newField], { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/projects/${id}`,
        newField
      );
      if (response.status < 200 || response.status >= 300)
        throw new Error("Error server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// изменение поля задач

export const changeTasksField = createAsyncThunk(
  "projects/changeTasksField",
  async ([id, tasks], { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/projects/${id}`,
        tasks
      );
      if (response.status < 200 || response.status >= 300)
        throw new Error("Erroe server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// удаление проекта

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/projects/${id}`
      );
      if (response.status < 200 || response.status >= 300)
        throw new Error("Error server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    data: [],
    singleData: [],
    status: null,
    error: null,
  },

  extraReducers: (build) => {
    build
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      // получение данных отдельного проекта
      .addCase(getSingleData.pending, (state) => {
        state.status = "loading";
        state.singleData = [];
      })
      .addCase(getSingleData.fulfilled, (state, action) => {
        state.status = "success";

        state.singleData = action.payload;
      })
      // добавление
      .addCase(postData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // изменение поля
      .addCase(changeFieldData.pending, (state, action) => {
        state.singleData.tasks = [];
        state.status = "loading";
      })
      .addCase(changeFieldData.fulfilled, (state, action) => {
        const updatedObject = action.payload;

        state.data = state.data.map((project) =>
          project.id === updatedObject.id ? updatedObject : project
        );

        state.singleData = updatedObject;

        state.status = "success";
      })
      // удаление проекта
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default projectsSlice.reducer;
