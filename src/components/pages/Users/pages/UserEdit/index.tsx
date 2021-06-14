import React from 'react'
import { PageLayout } from 'components/layout'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import NotFound from 'components/pages/NotFound'
import useUserService from 'hooks/services/useUserService'
import UserEditForm from './components/userEditform'

const UserEdit = () => {
  const { id } = useParams<{ id: string }>()
  const { getById } = useUserService()
  const { data, error } = useQuery(['users', id], getById)

  if (error) {
    return <NotFound />
  }
  const user = data?.data

  return user ? (
    <PageLayout
      title={`${user.firstname} ${user.lastname}`}
      subtitle="Crea y gestiona los usuarios"
      icon={faTrophy}>
      <UserEditForm user={user} />
    </PageLayout>
  ) : null
}

export default UserEdit
