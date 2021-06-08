import React from 'react'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import DashboardChildComponent from './components/DashboardChildComponent'

const Dashboard = () => {
  return (
    <PageLayout
      title="Dashboard"
      subtitle="Todos los datos de tus movimientos"
      icon={faChartPie}>
      <DashboardChildComponent>
        Este es el dashboard
      </DashboardChildComponent>
    </PageLayout>
  )
}

export default Dashboard
