export interface ConfirmEmailModel {
  code: string
}

export interface ChangeEmailModel {
  email: string
}

export interface ChangeLocationModel {
  email: string
  country: string
  state: string
  city: string
  address: string
}
