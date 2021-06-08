import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PageTitleProps {
  title: string
  icon: IconDefinition
  subtitle?: string
}

const PageTitle = ({ title, subtitle, icon }: PageTitleProps) => {
  return (
    <Flex
      as="header"
      px="8"
      py="4"
      boxShadow="md"
      alignItems="center">
      <Flex
        w="14"
        h="14"
        fontSize="3xl"
        alignItems="center"
        justifyContent="center"
        bgColor="gray.100"
        borderRadius="md"
        textColor="primary.500">
        <FontAwesomeIcon icon={icon} fixedWidth />
      </Flex>
      <Box ml="3" textColor="gray.600">
        <Heading as="h1" fontSize="2xl">{title}</Heading>
        <Text as="p" fontSize="sm">{subtitle}</Text>
      </Box>
    </Flex>
  )
}

export default PageTitle
