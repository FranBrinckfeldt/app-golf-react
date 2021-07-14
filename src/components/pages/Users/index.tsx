import React, { useState } from 'react'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import UsersTable from './components/UsersTable'
import UsersActions from './components/UsersActions'
import useUsers from './hooks/useUsers'

const Users = () => {
  const [emailQuery, setEmailQuery] = useState('')
  const { data } = useUsers(emailQuery)
  return (
    <PageLayout
      title="Usuarios"
      subtitle="Administra a los usuarios"
      icon={faUserAlt}>
      <UsersActions onEmailQueryChanges={setEmailQuery} />
      <UsersTable users={data?.data} />
    </PageLayout>
  )
}

export default Users
