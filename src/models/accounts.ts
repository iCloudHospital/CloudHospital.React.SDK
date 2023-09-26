import { object, string, ref } from 'yup'

export const ConfirmAccountSchema = object().shape({
  code: string().required('code is required')
})

export enum Role {
  Doctor = 'Doctor',
  LocalManager = 'LocalManager',
  User = 'User'
}

export interface PostAccountModel {
  email: string
  password: string
  confirmPassword: string
  role: Role
}

export const PostAccountSchema = object().shape({
  email: string().required().email('Invalid email'),
  password: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit'),
  confirmPassword: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit')
    .oneOf([ref('password')], 'Passwords do not match')
})

export interface AccountModel {
  id: string
  userName: string
  hasPassword: boolean
  email: string
  emailConfirmed: boolean
  phoneNumber: string
  phoneNumberConfirmed: boolean
  twoFactorEnabled: boolean
  lockoutEnd: string
  lockoutEnabled: boolean
  accessFailedCount: number
  roles: [string]
}

export interface ChangePasswordModel {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export const ChangePasswordSchema = object().shape({
  oldPassword: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit'),
  newPassword: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit'),
  confirmPassword: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit')
    .oneOf([ref('newPassword')], 'Passwords do not match')
})

export interface ForgotPasswordModel {
  policy: number
  email: string
}

export const ForgotPasswordSchema = object().shape({
  email: string().required().email('Invalid email')
})

export interface ResetPasswordModel {
  email: string
  password: string
  confirmPassword: string
  code: string
}

export const ResetPasswordSchema = object().shape({
  email: string().required().email('Invalid email'),
  password: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit'),
  confirmPassword: string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'must Contain One Uppercase, One Lowercase, One Digit')
    .oneOf([ref('password')], 'Passwords do not match'),
  code: string().required().min(1, 'Confrim code must be 6 digits')
})

export interface ConfirmAccountModel {
  code: string
}

export const ConfrimAccountSchema = object().shape({
  code: string().required().min(1, 'Confrim code must be 6 digits')
})
