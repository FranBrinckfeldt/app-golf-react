import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const newUserTokenState = atom({
  key: 'newUserToken',
  default: ''
})

export const useNewUserTokenState = () => useRecoilState(newUserTokenState)
export const useSetNewUserToken = () => useSetRecoilState(newUserTokenState)
export const useNewUserTokenValue = () => useRecoilValue(newUserTokenState)
