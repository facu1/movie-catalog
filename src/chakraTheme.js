import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

const myTheme = {
  colors: {
    background: {
      900: '#030f27',
      800: '#092c71',
      700: '#0c3a97',
      transparent: '#030f27EF'
    },
  },
  styles: {
    global: {
      body: {
        bg: '#030f27',
        color: 'white',
        fontFamily: 'sans-serif'
      },
      '::-webkit-scrollbar': {
        height: '10px'
      },
      '::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '5px'
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: '#555'
      }
    },
  },
  components: {
    Button: defineStyleConfig({
      variants: {
        myIconButton: defineStyle({
          fontSize: '22px'
        })
      },
      defaultProps: {
        variant: 'myIconButton'
      }
    })
  }
}

const theme = extendTheme(myTheme)

export default theme