import React from 'react'
import { CSSObject, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface NavigationItemProps {
  icon: IconProp
  label: string
  to: string
}

const hoverStyle: CSSObject = {
  bgColor: 'blackAlpha.100'
}

const NavigationLink = ({ icon, label, to }: NavigationItemProps) => {
  return (
    <Flex
      as={Link}
      to={to}
      px="3"
      py="3"
      alignItems="center"
      transition="250ms"
      _hover={hoverStyle}
      borderRadius="md">
      <Text as={FontAwesomeIcon} icon={icon} fontSize="xl" mr="2" fixedWidth />
      <Text as="span" fontSize="md">{label}</Text>
    </Flex>
  )
}

export default NavigationLink
