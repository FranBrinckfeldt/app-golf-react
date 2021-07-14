import useUserService from 'hooks/services/useUserService'
import { useQuery } from 'react-query'

const useUsers = (emailQuery?: string) => {
  const service = useUserService()
  const { data } = useQuery(['users', emailQuery as string], service.getAll)
  return {
    data
  }
}

export default useUsers
