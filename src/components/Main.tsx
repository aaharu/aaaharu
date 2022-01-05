import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps): JSX.Element => (
  <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="2rem"
    px="1rem"
    {...props}
  />
)