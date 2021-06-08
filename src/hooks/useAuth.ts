import { useCallback, useMemo } from 'react'
import { useHistory } from 'react-router'
import jwt from 'jsonwebtoken'
import { useTokenState } from 'core/recoil'
import { getStorage } from 'utils'
import { constants } from 'core/config'

interface DecodedToken {
  _id: string
  email: string
  role: string
  active: boolean
}

const useAuth = () => {
  const [token, setToken] = useTokenState()
  const { push } = useHistory()

  const logout = useCallback((redirectTo = '/login') => {
    getStorage()?.removeItem(constants.AUTH_TOKEN_KEY)
    setToken(null)
    push(redirectTo)
  }, [push, setToken])

  const decodedToken = useMemo(() => {
    if (token) {
      const decoded = jwt.decode(token) as DecodedToken
      if (!decoded) {
        logout()
      }
      return decoded
    }
  }, [token, logout])

  const isAuthenticated = !!decodedToken

  const setAuthToken = useCallback((idToken?: string) => {
    getStorage()?.setItem(constants.AUTH_TOKEN_KEY, idToken || '')
    setToken(idToken)
  }, [setToken])

  return {
    token,
    logout,
    setAuthToken,
    decodedToken,
    isAuthenticated
  }
}

export default useAuth
