export interface LoginPayload {
  email: string
  password: string
}

export interface CreatePasswordPayload {
  password: string
  token: string
}

export interface AccessTokenResponse {
  accessToken: string
}
