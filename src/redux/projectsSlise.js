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
  async (id, { rejectWithValue }) => {
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

// изменение

export const changeStatusData = createAsyncThunk(
  "projects/changeStatusData",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/projects/${id}`,
        { status: status }
      );
      if (response.status < 200 || response.status >= 300)
        throw new Error("Error server");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// удаление

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
      .addCase(getSingleData.fulfilled, (state, action) => {
        state.singleData = action.payload;
      })
      // добавление
      .addCase(postData.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      // изменение статуса
      .addCase(changeStatusData.fulfilled, (state, action) => {
        const updatedObject = action.payload;

        state.data = state.data.map((project) =>
          project.id === updatedObject.id ? updatedObject : project
        );

        state.singleData = updatedObject;
      })
      // удаление
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export default projectsSlice.reducer;
