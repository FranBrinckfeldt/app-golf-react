import React, { MouseEventHandler } from 'react'
import { CSSObject, Flex, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface NavigationButtonProps {
  icon: IconProp
  label: string
  onClick: MouseEventHandler<HTMLDivElement>
}

const hoverStyle: CSSObject = {
  bgColor: 'blackAlpha.100'
}

const NavigationButton = ({ icon, label, onClick }: NavigationButtonProps) => {
  return (
    <Flex
      as="button"
      onClick={onClick}
      px="4"
      py="4"
      transition="250ms"
      _hover={hoverStyle}
      borderRadius="md">
      <Text as={FontAwesomeIcon} icon={icon} fontSize="2xl" mr="2" fixedWidth />
      <Text as="span" fontSize="lg">{label}</Text>
    </Flex>
  )
}

export default NavigationButton