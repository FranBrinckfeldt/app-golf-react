import { extendTheme } from '@chakra-ui/react'

const tailwindTheme = {
  colors: {
    primary: {
      DEFAULT: '#48BB78',
      50: '#EFF9F3',
      100: '#DDF2E6',
      200: '#B8E4CA',
      300: '#92D7AF',
      400: '#6DC993',
      500: '#48BB78',
      600: '#389860',
      700: '#2B7249',
      800: '#1D4D31',
      900: '#0F2819'
    },
    accent: {
      DEFAULT: '#F08200',
      50: '#FFECD7',
      100: '#FFE1BD',
      200: '#FFC98A',
      300: '#FFB257',
      400: '#FF9B24',
      500: '#F08200',
      600: '#BD6600',
      700: '#8A4B00',
      800: '#572F00',
      900: '#241300'
    }
  }
}

export default extendTheme(tailwindTheme)
