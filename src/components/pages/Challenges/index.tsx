import React from 'react'
import { Flex, Text } from '@chakra-ui/layout'
import { PageLayout } from 'components/layout'
import { faGolfBall } from '@fortawesome/free-solid-svg-icons'

const Challenges = () => {
  return (
    <PageLayout
      title="Dashboard"
      subtitle="Todos los datos de tus movimientos"
      icon={faGolfBall}>
      <Text>Esta es la pantalla de tus desafíos</Text>
    </PageLayout>
  )
}

export default Challenges
