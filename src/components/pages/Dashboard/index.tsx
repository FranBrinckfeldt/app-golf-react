import React from 'react'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import UserCard from './components/UserCard'

const Dashboard = () => {
  return (
    <PageLayout
      title="Dashboard"
      subtitle="Todos los datos de tus movimientos"
      icon={faChartPie}>
      <UserCard />
    </PageLayout>
  )
}

export default Dashboard
