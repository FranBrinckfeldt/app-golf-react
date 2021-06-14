import React from 'react'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { PageLayout } from 'components/layout'
import UserRegisterForm from './components/UserRegisterForm'
import { useNewUserTokenValue } from './recoil/newUserToken'
import UserRegisterSuccess from './components/UserRegisterSuccess'

const Users = () => {
  const newUserToken = useNewUserTokenValue()
  return (
    <PageLayout
      title="Usuarios"
      subtitle="Administra a los usuarios"
      icon={faUserAlt}>
      {!newUserToken ? (
        <UserRegisterForm />
      ) : (
        <UserRegisterSuccess />
      )}
    </PageLayout>
  )
}

export default Users
