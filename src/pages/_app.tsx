import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>aaharu.com</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monofett&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
