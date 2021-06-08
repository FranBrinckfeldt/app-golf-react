import React, { ReactChildren } from 'react'
import { Text } from '@chakra-ui/layout'

interface SectionTitleProps {
  children: ReactChildren | string
}

const DashboardChildComponent = ({ children }: SectionTitleProps) => {
  return (
    <Text fontSize="xl" textColor="gray.500" mb="2">
      {children}
    </Text>
  )
}

export default DashboardChildComponent
