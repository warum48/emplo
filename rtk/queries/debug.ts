import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customBaseQuery } from "./_customBaseQuery";

export const debug = createApi({
  reducerPath: "debug",

  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    debugForm: builder.mutation<any, any>({
      query: (anyform) => ({
        url: "/api/debug/form",
        method: "POST",
        params: { error: false },
        body: {error: false, data: anyform} 
      }),
    }),
  }),
});

export const { useDebugFormMutation } = debug;
