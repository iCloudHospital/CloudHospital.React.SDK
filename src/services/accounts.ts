// import axios from 'axios'
import {
  PostAccountModel,
  ForgotPasswordModel,
  ResetPasswordModel,
  ChangePasswordModel,
  AccountModel,
  ConfirmAccountModel
} from '../models/accounts'
import { IdentityError } from '../models/exceptions'
import { log } from '../utils/log'
import { RestException, Errors } from '../models/exceptions'
import { HttpClient } from '../utils/HttpClient'

const stsAuthority = process.env.NEXT_PUBLIC_STS_ISSUER

const postAccountAsync = async (data: PostAccountModel): Promise<boolean> => {
  try {
    log('CALL postAccountAsync')
    const action = 'api/v1/accounts'

    const url = `${stsAuthority}/${action}`
    log('DATA: ', data)
    log('URL > ', url)

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      url,
      data
    })

    if (response.status === 200 && response.data) {
      log('sign up success.', response.data)
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error: ', error.response)
    if (error.response.data.errors !== undefined) {
      log('error.response.data.errors', error.response.data.errors)
      const identityErrors: IdentityError[] = []
      const email =
        error.response.data.errors.Email !== undefined
          ? ({
              code: 'Email',
              description: error.response.data.errors.Email
            } as IdentityError)
          : null

      if (email !== null) {
        identityErrors.push(email)
      }

      const password =
        error.response.data.errors.Password !== undefined
          ? ({
              code: 'Password',
              description: error.response.data.errors.Password
            } as IdentityError)
          : null

      if (password !== null) {
        identityErrors.push(password)
      }

      const confirmPassword =
        error.response.data.errors.ConfirmPassword !== undefined
          ? ({
              code: 'ConfirmPassword',
              description: error.response.data.errors.ConfirmPassword
            } as IdentityError)
          : null

      if (confirmPassword !== null) {
        identityErrors.push(confirmPassword)
      }

      throw identityErrors
    }

    error.response.data = error.response.data.filter((d: IdentityError) => d.code !== 'DuplicateUserName')

    throw error.response.data as IdentityError[]
  }
}

const loadAccountAsync = async (access_token?: string, token_type?: string): Promise<AccountModel> => {
  try {
    log('CALL loadAccounts')
    const action = 'api/v1/accounts'
    const url = `${stsAuthority}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'GET',
      headers: {
        Accept: '*/*'
      },
      url
    })
    if (response.status === 200 && response.data) {
      return response.data as AccountModel
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error: ', error.response)

    if (error.response.status === 401) {
      throw {
        status: error.response.status,
        errors: {
          message: error.response.statusText
        } as Errors
      } as RestException
    }

    throw error.response.data as RestException
  }
}

const sendVerificationMailAsync = async (access_token?: string, token_type?: string): Promise<boolean> => {
  try {
    log('CALL sendVerificationMail')
    const action = 'api/v1/accounts/sendVerificationEmail'
    const url = `${stsAuthority}/${action}`

    log('URL > ', url)

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
      },
      url
    })

    if (response.status === 200) {
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error: ', error.response)

    throw error.response.data as RestException
  }
}

const confirmAccountAsync = async (
  data: ConfirmAccountModel,
  access_token?: string,
  token_type?: string
): Promise<boolean> => {
  try {
    log('CALL confirmAccount')
    const action = 'api/v1/accounts/confirmEmail'
    const url = `${stsAuthority}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
      },
      url,
      data
    })

    if (response.status === 200) {
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error: ', error.response)

    throw error.response.data as IdentityError[]
  }
}

const forgotPasswordAsync = async (
  data: ForgotPasswordModel,
  access_token?: string,
  token_type?: string
): Promise<boolean> => {
  try {
    log('CALL forgotPassword')
    const action = 'api/v1/accounts/forgotPassword'
    const url = `${stsAuthority}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
      },
      url,
      data
    })

    if (response.status === 200) {
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error : ', error.response)

    const userIdentityErrors: IdentityError[] = []

    if (error.response.data.errors !== undefined) {
      const email =
        error.response.data.errors.Email !== undefined
          ? ({
              code: 'Email',
              description: error.response.data.errors.Email
            } as IdentityError)
          : null

      if (email !== null) {
        userIdentityErrors.push(email)
      }
    } else {
      const unexpected =
        typeof error.response.data === 'string'
          ? ({
              code: 'Unexpected Error',
              description: error.response.data
            } as IdentityError)
          : null

      if (unexpected !== null) {
        userIdentityErrors.push(unexpected)
      }
    }

    if (userIdentityErrors.length > 0) {
      throw userIdentityErrors
    }

    throw error.response.data as IdentityError[]
  }
}

const resetPasswordAsync = async (
  data: ResetPasswordModel,
  access_token?: string,
  token_type?: string
): Promise<boolean> => {
  try {
    log('CALL resetPassword')
    const action = 'api/v1/accounts/resetPassword'
    const url = `${stsAuthority}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
      },
      url,
      data
    })

    if (response.status === 200) {
      log('response', response)
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error : ', error.response)

    if (error.response.data.errors !== undefined) {
      log('error.response.data.errors', error.response.data.errors)
      const identityErrors: IdentityError[] = []

      const password =
        error.response.data.errors.Password !== undefined
          ? ({
              code: 'Password',
              description: error.response.data.errors.Password
            } as IdentityError)
          : null

      if (password !== null) {
        identityErrors.push(password)
      }

      const confirmPassword =
        error.response.data.errors.ConfirmPassword !== undefined
          ? ({
              code: 'ConfirmPassword',
              description: error.response.data.errors.ConfirmPassword
            } as IdentityError)
          : null

      if (confirmPassword !== null) {
        identityErrors.push(confirmPassword)
      }

      throw identityErrors
    }

    throw error.response.data as IdentityError[]
  }
}

const changePasswordAsync = async (
  data: ChangePasswordModel,
  access_token?: string,
  token_type?: string
): Promise<boolean> => {
  try {
    log('CALL changePassword')
    const action = 'api/v1/accounts/changePassword'
    const url = `${stsAuthority}/${action}`

    const client = HttpClient.getInstance()

    const response = await client({
      method: 'POST',
      headers: {
        Accept: '*/*',
        Authorization: `${token_type} ${access_token}`
      },
      url,
      data
    })

    if (response.status === 200) {
      return true
    } else {
      throw new Error('null response')
    }
  } catch (error: any) {
    log('error : ', error.response)
    if (error.response.data.errors !== undefined) {
      const identityErrors: IdentityError[] = []

      const newPassword =
        error.response.data.errors.NewPassword !== undefined
          ? ({
              code: 'NewPassword',
              description: error.response.data.errors.NewPassword
            } as IdentityError)
          : null

      if (newPassword !== null) {
        identityErrors.push(newPassword)
      }

      const oldPassword =
        error.response.data.errors.OldPassword !== undefined
          ? ({
              code: 'oldPassword',
              description: error.response.data.errors.OldPassword
            } as IdentityError)
          : null

      if (oldPassword !== null) {
        identityErrors.push(oldPassword)
      }

      const confirmPassword =
        error.response.data.errors.ConfirmPassword !== undefined
          ? ({
              code: 'ConfirmPassword',
              description: error.response.data.errors.ConfirmPassword
            } as IdentityError)
          : null

      if (confirmPassword !== null) {
        identityErrors.push(confirmPassword)
      }

      throw identityErrors
    }
    throw error.response.data as IdentityError[]
  }
}

export default {
  postAccountAsync,
  loadAccountAsync,
  sendVerificationMailAsync,
  confirmAccountAsync,
  forgotPasswordAsync,
  resetPasswordAsync,
  changePasswordAsync
}
