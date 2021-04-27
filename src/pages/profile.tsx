import Head from 'next/head'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Breadcrumb } from '../components/Breadcrumb'
import { HStack, Heading, Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Works = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Profile | aaharu.com</title>
      </Head>
      <Container height="100vh">
        <Header />

        <Breadcrumb items={[{ href: '/profile', name: 'Profile' }]} />

        <Main>
          <Heading>about &quot;aaharu&quot;</Heading>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>ID</Text>
            <Text>aaharu</Text>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>性別</Text>
            <Text>男</Text>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>出身地</Text>
            <Text>福島県</Text>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>生年</Text>
            <Text>1989</Text>
          </HStack>
          <Heading>Web activities</Heading>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>Twitter</Text>
            <Link href="https://twitter.com/aaharu" isExternal>
              @aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>GitHub</Text>
            <Link href="https://github.com/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>GitLab</Text>
            <Link href="https://gitlab.com/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>Bitbucket</Text>
            <Link href="https://bitbucket.org/aaharu/" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>last.fm</Text>
            <Link href="https://www.last.fm/user/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>ブクログ</Text>
            <Link href="https://booklog.jp/users/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>読書メーター</Text>
            <Link href="https://bookmeter.com/users/62207" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>TrueAchievements</Text>
            <Link
              href="https://www.trueachievements.com/gamer/aaharu"
              isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>TrueTrophies</Text>
            <Link href="https://www.truetrophies.com/gamer/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>Tumblr</Text>
            <Link href="https://aaharu.tumblr.com" isExternal>
              Yosage <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>Qiita</Text>
            <Link href="https://qiita.com/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
          <HStack spacing="10px">
            <Text w={['40%', '25%']}>teratail</Text>
            <Link href="https://teratail.com/users/aaharu" isExternal>
              aaharu <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
        </Main>
      </Container>
    </>
  )
}

export default Works
