import { nameOf, useGenericSWR, useGenericSWRMutation } from '@hooks/useGenericSWRs'
import {
  AccountModel,
  ChangePasswordModel,
  ConfirmAccountModel,
  ForgotPasswordModel,
  PostAccountModel,
  ResetPasswordModel
} from '@models/accounts'
import { IdentityError, RestException } from '@models/exceptions'
import {
  changePassword,
  confirmAccount,
  forgotPassword,
  getAccount,
  postAccount,
  resetPassword,
  sendVerificationMail
} from '@services/accounts'
import { SWRConfiguration } from 'swr'
import { SWRMutationConfiguration } from 'swr/mutation'

// #region POST api/v1/accounts
export const postAccountSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], PostAccountModel>(
    operationName + nameOf(() => postAccount),
    postAccount,
    config
  )
}
// #endregion POST api/v1/accounts

// #region GET api/v1/accounts
export const getAccountSWR = (
  operationName = '',
  payload: undefined,
  shouldFetch?: boolean,
  config?: SWRConfiguration<AccountModel, RestException>
) => {
  return useGenericSWR<AccountModel, RestException, undefined>(
    operationName + nameOf(() => getAccount),
    getAccount,
    payload,
    shouldFetch,
    config
  )
}

export const getAccountSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<AccountModel, RestException, undefined, string>
) => {
  return useGenericSWRMutation<AccountModel, RestException, never>(
    operationName + nameOf(() => getAccount),
    getAccount,
    config
  )
}
// #endregion GET api/v1/accounts

// #region POST api/v1/accounts/sendVerificationEmail
export const sendVerificationEmailSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, RestException, undefined, string>
) => {
  return useGenericSWRMutation<boolean, RestException, never>(
    operationName + nameOf(() => sendVerificationMail),
    sendVerificationMail,
    config
  )
}
// #endregion POST api/v1/accounts/sendVerificationEmail

// #region POST api/v1/accounts/confirmEmail
export const confirmAccountSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError, any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError, ConfirmAccountModel>(
    operationName + nameOf(() => confirmAccount),
    confirmAccount,
    config
  )
}
// #endregion POST api/v1/accounts/confirmEmail

// #region POST api/v1/accounts/confirmEmail
export const changePasswordSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], ChangePasswordModel>(
    operationName + nameOf(() => changePassword),
    changePassword,
    config
  )
}
// #endregion POST api/v1/accounts/confirmEmail

// #region POST api/v1/accounts/resetPassword
export const resetPasswordSWRMutation = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], ResetPasswordModel>(
    operationName + nameOf(() => resetPassword),
    resetPassword,
    config
  )
}
// #endregion POST api/v1/accounts/resetPassword

// #region POST api/v1/accounts/forgotPassword
export const forgotPasswordSWRMutaton = (
  operationName = '',
  config?: SWRMutationConfiguration<boolean, IdentityError[], any, string>
) => {
  return useGenericSWRMutation<boolean, IdentityError[], ForgotPasswordModel>(
    operationName + nameOf(() => forgotPassword),
    forgotPassword,
    config
  )
}
// #endregion POST api/v1/accounts/forgotPassword
