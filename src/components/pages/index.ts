import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faChartPie, faCog, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export interface Page {
  path: string
  exact: boolean
  component: React.LazyExoticComponent<React.FC>
  public?: boolean
  menu?: {
    icon: IconDefinition
    label: string
  }
}

const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: React.lazy(() => import('./Dashboard')),
    menu: {
      icon: faChartPie,
      label: 'Dashboard'
    }
  },
  {
    path: '/tournaments',
    exact: true,
    component: React.lazy(() => import('./Tournaments')),
    menu: {
      icon: faTrophy,
      label: 'Torneos'
    }
  },
  {
    path: '/tournaments/create',
    exact: true,
    component: React.lazy(() => import('./TournamentCreate'))
  },
  {
    path: '/users',
    exact: true,
    component: React.lazy(() => import('./Users')),
    menu: {
      icon: faUserAlt,
      label: 'Usuarios'
    }
  },
  {
    path: '/users/register',
    exact: true,
    component: React.lazy(() => import('./UserRegister'))
  },
  {
    path: '/account',
    exact: true,
    component: React.lazy(() => import('./Account')),
    menu: {
      icon: faCog,
      label: 'Mi Cuenta'
    }
  },
  {
    path: '/login',
    exact: true,
    public: true,
    component: React.lazy(() => import('./Login'))
  },
  {
    path: '/create-password/:token',
    exact: true,
    public: true,
    component: React.lazy(() => import('./CreatePassword'))
  },
  {
    path: '*',
    exact: false,
    component: React.lazy(() => import('./NotFound'))
  }
]

export default pages
