import { useColorMode, Switch, HStack } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <HStack>
      <SunIcon />
      <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
    </HStack>
  )
}
