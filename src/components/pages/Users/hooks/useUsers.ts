import useUserService from 'hooks/services/useUserService'
import { useQuery } from 'react-query'

const useUsers = () => {
  const service = useUserService()
  const { data } = useQuery('users', service.getAll)
  return {
    data
  }
}

export default useUsers
