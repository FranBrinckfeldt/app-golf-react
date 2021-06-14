import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import { faChartPie, faCog, faGolfBall, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons'

export interface Page {
  path: string
  exact: boolean
  component: React.LazyExoticComponent<React.FC>
  public?: boolean
  adminOnly?: boolean
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
    component: React.lazy(() => import('./Tournaments/pages/TournamentCreate')),
    adminOnly: true
  },
  {
    path: '/tournaments/:id',
    exact: true,
    component: React.lazy(() => import('./Tournaments/pages/TournamentItem'))
  },
  {
    path: '/users',
    exact: true,
    component: React.lazy(() => import('./Users')),
    adminOnly: true,
    menu: {
      icon: faUserAlt,
      label: 'Usuarios'
    }
  },
  {
    path: '/users/register',
    exact: true,
    component: React.lazy(() => import('./Users/pages/UserRegister')),
    adminOnly: true
  },
  {
    path: '/users/:id',
    exact: true,
    component: React.lazy(() => import('./Users/pages/UserEdit')),
    adminOnly: true
  },
  {
    path: '/challenges',
    exact: true,
    component: React.lazy(() => import('./Challenges')),
    menu: {
      icon: faGolfBall,
      label: 'Desafíos'
    }
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
