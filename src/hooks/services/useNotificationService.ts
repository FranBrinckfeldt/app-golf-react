import useAuth from 'hooks/useAuth'
import { useCallback } from 'react'
import { getHttpClient } from 'utils'

const useNotificationService = () => {
  const { token } = useAuth()

  const getAll = useCallback(async () => {
    const client = getHttpClient({ token: token as string })
    return client.get<{ message: string, key: string }[]>('/notifications/')
  }, [token])

  const deleteByKey = useCallback(async (key: string) => {
    const client = getHttpClient({ token: token as string })
    return client.delete(`/notifications/${key}`)
  }, [token])

  return {
    getAll,
    deleteByKey
  }
}

export default useNotificationService
