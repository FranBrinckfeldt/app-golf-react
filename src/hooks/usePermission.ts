import pages from 'components/pages'
import { useLocation } from 'react-router'
import useAuth from './useAuth'

const usePermission = () => {
  const { pathname } = useLocation()
  const { decodedToken } = useAuth()
  const currentPage = pages.find(page => page.path === pathname)
  return currentPage?.adminOnly ? decodedToken?.role === 'ADMIN' : true
}

export default usePermission
