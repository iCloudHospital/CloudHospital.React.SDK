export interface UserInfo {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string
}
export interface GrantValidationResult {
  error: string
  error_description: string
  userInfo: UserInfo
  errorCode: string
}
export interface IdentityError {
  code: string
  description: string
}

export interface RestException {
  title: string
  status: number
  instance: string
  traceId: string
  errors: Errors
}

export interface Errors {
  message: string[]
}

export interface IdentityClaim {
  type: string
  value: string
}
