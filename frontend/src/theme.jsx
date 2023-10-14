import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
      heading: `'DM Serif Text', serif`,
      body: `'Merriweather', serif`,
    },
    initialColorMode: 'light',
    useSystemColorMode: false,
})

export default theme