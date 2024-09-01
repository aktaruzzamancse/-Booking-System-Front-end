import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://car-wash-booking-system-lime.vercel.app/api'
    }),
    endpoints: (builder) => ({
        getServers:builder.query({
            query: () =>({
                url: '/services',
                method:'GET',
            })
        })
        
    }), 
})
export const {useGetServersQuery} = baseApi