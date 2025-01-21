import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Projects"],

  endpoints: (build) => ({
    getData: build.query({
      query: (id) => `projects ${id ? `/${id}` : ""}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Projects", id })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),
    getSingleData: build.query({
      query: (id) => `projects?id=${id}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Projects", id })),
              { type: "Projects", id: "LIST" },
            ]
          : [{ type: "Projects", id: "LIST" }],
    }),
    // добавление нового проэкта
    addProject: build.mutation({
      query: (body) => ({
        url: "projects",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
    // изменение поля
    patchData: build.mutation({
      query: ([id, newField]) => ({
        url: `projects/${id}`,
        method: "PATCH",
        body: newField,
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),

    // удаление проекта
    deleteProject: build.mutation({
      query: (id) => ({
        url: `projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Projects", id: "LIST" }],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetSingleDataQuery,
  usePatchDataMutation,
  useDeleteProjectMutation,
  useAddProjectMutation,
} = projectsApi;
