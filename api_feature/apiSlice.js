import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react'
// import { headers } from 'next/dist/client/components/headers'

export const globalState = {
    currentUser: {},
    authorizationToken: ``,
}

export const apiSlice = createApi({
    reducerPath: 'api',
    // tagTypes: [],
    baseQuery: fetchBaseQuery({baseUrl: `https://unikribbackend.onrender.com/unikrib`}),
    endpoints: builder => ({
        getReviews: builder.query({
            query: () => ({
                url: '/reviews',
                method: 'GET',
                credentials: 'include',
                headers: {
                    // Authorization: 'unikrib f2906ed9-bc6f-4ee0-8be4-ce9928352f3e'
                    Authorization: `unikrib ${globalState.authorizationToken}`
                },
            }),
        }),
        getAddUser: builder.query({
            query: (user) => {{
                console.log(user)
                return {
                    url: '/users',
                    method: 'POST',
                    credentials: 'include'
                }
            }},
            transformResponse: res => {
                console.log('CREATE USER TRANSFORM RESPONSE')
                console.log(res)
            }
        }),
        getLogIn: builder.mutation({
            query: (user) => {{
                console.log(user)
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: user
                }
            }},
            transformResponse: res => {
                // console.log('GET LOGIN RESPONSE')
                console.log(res)
                globalState.authorizationToken = res.token
                return res
            }
        }),
         getLogOut: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'DELETE',
                credentials: 'include'
            }),
            transformResponse: res => {
                globalState.authorizationToken = ''
                console.log(res)
            }
        })
    })
})

export const {
    useGetAddUserQuery,
    useGetLogInMutation,
    useGetLogOutMutation,
    useGetReviewsQuery,
} = apiSlice

