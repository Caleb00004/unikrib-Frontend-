import '../styles/globals.css'
import { ContextProvider } from '../context/testContext'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from '../api_feature/apiSlice'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <ApiProvider api={apiSlice}>
      <ContextProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </ApiProvider>
  )
}

export default MyApp
