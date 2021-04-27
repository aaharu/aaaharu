import { Heading, Flex, Spacer, Box, Square, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

export const Header = (): JSX.Element => {
  return (
    <Flex width="100%" maxWidth="48rem">
      <Box p="2">
        <Link href="/">
          <a>
            <Heading as="h1" fontFamily="Monofett" fontSize={['24px', '52px']}>
              aaharu.com
            </Heading>
          </a>
        </Link>
      </Box>
      <Spacer />
      <HStack spacing="20px">
        <Square>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Square>
        <Square>
          <Link href="/works">
            <a>Works</a>
          </Link>
        </Square>
        <DarkModeSwitch />
      </HStack>
    </Flex>
  )
}
