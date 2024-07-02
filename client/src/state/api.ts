// redux state management tool
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// endpoints for calling backend

export const api = createApi({
    baseQuery: fetchBaseQuery ({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: [],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({ // kpi key performance indicator
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"]
        }),
    }),
})

export const  useGetKpisQuery  = api;