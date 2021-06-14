import React, { ReactChildren } from 'react'
import { Text } from '@chakra-ui/layout'
import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

interface SectionTitleProps {
  children: ReactChildren | string
}

const DashboardChildComponent = ({ children }: SectionTitleProps) => {
  return (
    <Text fontSize="xl" textColor="gray.500" mb="2">
      {children}
      <StatGroup>
        <Stat>
          <StatLabel>Cantidad de usuarios</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Cantidad de desafíos</StatLabel>
          <StatNumber>45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Text>
  )
}

export default DashboardChildComponent
