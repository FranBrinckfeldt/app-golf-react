import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/layout'
import { Page } from 'components/pages'

interface RouteItemProps {
  page: Page
}

const routeVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const PageRenderer = ({ page }: RouteItemProps) => {
  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="visible"
      exit="hidden"
      w="full"
      variants={routeVariants}>
      <page.component />
    </Box>
  )
}

export default PageRenderer
