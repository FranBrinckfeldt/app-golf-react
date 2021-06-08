import React, { ReactChild } from 'react'
import { QueryClientProvider } from 'react-query'
import useCustomQueryClient from './useCustomQueryClient'

const CustomQueryClientProvider = ({ children }: { children: ReactChild }) => {
  const queryClient = useCustomQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default CustomQueryClientProvider
