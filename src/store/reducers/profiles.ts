import { UserModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  changeEmailAsync,
  loadProfileAsync,
  ProfilesActionTypes,
  resetProfileState,
  resetUpdateProfileErrors,
  updateProfileAsync
} from '../actions/profiles'

export const isLoadingProfile = createReducer<boolean, ProfilesActionTypes>(false as boolean)
  .handleAction(
    [
      resetProfileState,
      loadProfileAsync.failure,
      loadProfileAsync.success,
      changeEmailAsync.failure,
      changeEmailAsync.success
    ],
    (state, action) => false
  )
  .handleAction([loadProfileAsync.request, changeEmailAsync.request], (state, action) => true)

export const loadProfileErrors = createReducer<RestException | null, ProfilesActionTypes>(null)
  .handleAction([resetProfileState, loadProfileAsync.request, loadProfileAsync.success], (state, action) => null)
  .handleAction([loadProfileAsync.failure], (state, action) => action.payload)

export const profile = createReducer<UserModel | null, ProfilesActionTypes>(null)
  .handleAction([resetProfileState, loadProfileAsync.request, loadProfileAsync.failure], (state, action) => null)
  .handleAction([loadProfileAsync.success], (state, action) => action.payload)

export const changeEmailErrors = createReducer<RestException | null, ProfilesActionTypes>(null)
  .handleAction([resetProfileState, changeEmailAsync.request, changeEmailAsync.success], (state, action) => null)
  .handleAction([changeEmailAsync.failure], (state, action) => action.payload)

export const changeEmailSuccess = createReducer<boolean, ProfilesActionTypes>(false as boolean)
  .handleAction([resetProfileState, changeEmailAsync.request, changeEmailAsync.failure], (state, action) => false)
  .handleAction([changeEmailAsync.success], (state, action) => true)

export const isUpdatingProfile = createReducer<boolean, ProfilesActionTypes>(false)
  .handleAction([resetProfileState, updateProfileAsync.request], (_, __) => true)
  .handleAction([updateProfileAsync.success, updateProfileAsync.failure], (_, __) => false)

export const updateProfileErrors = createReducer<RestException | null, ProfilesActionTypes>(null)
  .handleAction([resetUpdateProfileErrors, updateProfileAsync.request, updateProfileAsync.success], (_, __) => null)
  .handleAction([updateProfileAsync.failure], (_, action) => action.payload)

export const updateProfileResult = createReducer<UserModel | null, ProfilesActionTypes>(null)
  .handleAction([resetProfileState, updateProfileAsync.request, updateProfileAsync.failure], (_, __) => null)
  .handleAction([updateProfileAsync.success], (_, action) => action.payload)

const profilesState = combineReducers({
  isLoadingProfile,
  loadProfileErrors,
  profile,
  changeEmailErrors,
  changeEmailSuccess,
  isUpdatingProfile,
  updateProfileErrors,
  updateProfileResult
})

export default profilesState
export type ProfilesState = ReturnType<typeof profilesState>
