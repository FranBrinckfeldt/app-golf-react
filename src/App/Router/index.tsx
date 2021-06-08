import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from 'components/layout'
import RouterSwitch from './components/RouterSwitch'
import CustomQueryClientProvider from '../CustomQueryClient'

const SuspensePage = () => {
  return (
    <p>Loading lazy component</p>
  )
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <CustomQueryClientProvider>
        <DefaultLayout>
          <Suspense fallback={<SuspensePage />}>
            <RouterSwitch />
          </Suspense>
        </DefaultLayout>
      </CustomQueryClientProvider>
    </BrowserRouter>
  )
}

export default Router
