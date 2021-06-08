/* eslint-disable import/prefer-default-export */
import axios from 'axios'
import { constants } from '../core/config'

interface ClientProps {
  token?: string
}

export const getHttpClient = (props?: ClientProps) => axios.create({
  baseURL: constants.API_URI,
  headers: {
    Authorization: props?.token ? `Bearer ${props.token}` : undefined
  }
})

export default getHttpClient
