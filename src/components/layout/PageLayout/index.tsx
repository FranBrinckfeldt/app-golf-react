import React, { ReactElement } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Box } from '@chakra-ui/react'
import PageTitle from './components/PageTitle'

interface PageLayoutProps {
  children?: ReactElement | ReactElement[]
  title: string
  subtitle?: string
  icon: IconDefinition
  pt?: string
}

const PageLayout = ({ children, title, subtitle, icon, pt = '4' }: PageLayoutProps) => {
  return (
    <>
      <PageTitle title={title} subtitle={subtitle} icon={icon} />
      <Box px="8" pt={pt}>
        {children}
      </Box>
    </>
  )
}

export default PageLayout
