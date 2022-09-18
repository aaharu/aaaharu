import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Breadcrumb } from '../components/Breadcrumb'
import { Heading, ListItem, UnorderedList, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Profile = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Works | aaharu.com</title>
      </Head>
      <Container height="100vh">
        <Header />

        <Breadcrumb items={[{ href: '/works', name: 'Works' }]} />

        <Main>
          <Heading>製作物</Heading>
          <UnorderedList>
            <ListItem>
              <Link href="https://agif.deno.dev/" isExternal>
                agif <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
        </Main>
      </Container>
    </>
  )
}

export default Profile
