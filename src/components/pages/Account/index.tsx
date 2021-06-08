import React from 'react'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'

const Account = () => {
  return (
    <PageLayout
      title="Mi Cuenta"
      subtitle="Toda la información de tu cuenta"
      icon={faCog}>
      <p>test</p>
    </PageLayout>
  )
}

export default Account
