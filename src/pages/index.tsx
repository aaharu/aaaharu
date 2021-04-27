import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <script
          async
          src="https://embedr.flickr.com/assets/client-code.js"
          charSet="utf-8"></script>
      </Head>
      <Container height="100vh">
        <Header />

        <Main>
          <a
            data-flickr-embed="true"
            data-context="true"
            href="https://www.flickr.com/photos/92833937@N02/14111749874/in/dateposted-public/"
            title="image">
            <img
              src="https://live.staticflickr.com/2917/14111749874_2001339b52_h.jpg"
              width="800"
              height="1000"
              alt="image"
            />
          </a>
        </Main>
      </Container>
    </>
  )
}

export default Index
