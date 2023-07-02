import '../styles/globals.css'
import { ContextProvider } from '../context/testContext'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
        <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
