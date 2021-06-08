import React from 'react'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import UsersTable from './components/UsersTable'
import UsersActions from './components/UsersActions'
import useUsers from './hooks/useUsers'

const Users = () => {
  const { data } = useUsers()
  return (
    <PageLayout
      title="Usuarios"
      subtitle="Administra a los usuarios"
      icon={faUserAlt}>
      <UsersActions />
      <UsersTable users={data?.data} />
    </PageLayout>
  )
}

export default Users
