import { object, string } from 'yup'

export interface IdentityToken {
  id_token: string
  access_token: string
  refresh_token: string
  expires_in: number
  email: string | undefined
  token_type: string
  scope: string
  error?: string
}

export interface EmailSignIn {
  email: string
  password: string
}

export const EmailSignInSchema = object().shape({
  email: string().required().email('Invalid email'),
  password: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])^(?=.*[A-Z])(?=.*\d)[A-Za-z\d~!@#$%^&*()_+\-=]{8,}$/,
      'must Contain One Uppercase, One Lowercase, One Digit'
    )
})

export interface ExternalSignIn {
  grant_type: 'external'
  provider: 'Google' | 'Facebook' | 'Apple'
  email: string
  external_token: string
  sub: string
  firstName: string
  lastName: string
}

export interface ExternalLogins {
  currentLogins: CurrentLogin[]
  otherLogins: OtherLogin[]
  canRemoveCurrentLogin: boolean
}

export interface CurrentLogin {
  loginProvider: 'Google' | 'Facebook' | 'Apple'
  providerDisplayName: 'Google' | 'Facebook' | 'Apple'
  providerKey: string
}

export interface OtherLogin {
  name: 'Google' | 'Facebook' | 'Apple'
  displayName: 'Google' | 'Facebook' | 'Apple'
  handlerType: string
}
