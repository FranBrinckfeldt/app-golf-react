import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { constants } from 'core/config'
import { getStorage } from 'utils'

const tokenState = atom({
  key: 'tokenState',
  default: getStorage()?.getItem(constants.AUTH_TOKEN_KEY)
})

export const useTokenState = () => useRecoilState(tokenState)
export const useSetToken = () => useSetRecoilState(tokenState)
export const useTokenValue = () => useRecoilValue(tokenState)
