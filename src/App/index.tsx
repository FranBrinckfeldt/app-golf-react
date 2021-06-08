import React from 'react'
import { RecoilRoot } from 'recoil'
import { ChakraProvider } from '@chakra-ui/react'
import tailwindTheme from 'core/tailwindTheme'
import Router from './Router'

function App() {
  return (
    <ChakraProvider theme={tailwindTheme}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ChakraProvider>
  )
}

export default App
