import {
  ContributorsModel,
  ContributorModel,
  ContributorSnsHandlesModel,
  SnsHandleModel
} from 'ch-api-client-typescript2/lib'
import { createAsyncAction, ActionType, createAction } from 'typesafe-actions'
import {
  ContributorSearchOption,
  ContributorSnsHandlesSearchOption,
  ContributorSnsHnadleSearchOption,
  ContributorsSearchOption
} from '../../models/contributors'
import { RestException } from '../../models/exceptions'

// #region Contributors
export const loadContributorsAsync = createAsyncAction(
  'LOAD_CONTRIBUTORS_REQUEST',
  'LOAD_CONTRIBUTORS_SUCCESS',
  'LOAD_CONTRIBUTORS_FAILURE'
)<ContributorsSearchOption, ContributorsModel, RestException>()

export const appendContributorsAsync = createAsyncAction(
  'APPEND_CONTRIBUTORS_REQUEST',
  'APPEND_CONTRIBUTORS_SUCCESS',
  'APPEND_CONTRIBUTORS_FAILURE'
)<ContributorsSearchOption, ContributorsModel, RestException>()

export const loadContributorAsync = createAsyncAction(
  'LOAD_CONTRIBUTOR_REQUEST',
  'LOAD_CONTRIBUTOR_SUCCESS',
  'LOAD_CONTRIBUTOR_FAILURE'
)<ContributorSearchOption, ContributorModel, RestException>()

export const loadTranslatedContributorAsync = createAsyncAction(
  'LOAD_TRANSLATED_CONTRIBUTOR_REQUEST',
  'LOAD_TRANSLATED_CONTRIBUTOR_SUCCESS',
  'LOAD_TRANSLATED_CONTRIBUTOR_FAILURE'
)<ContributorSearchOption, ContributorModel, RestException>()

export const resetContributorsState = createAction('RESET_CONTRIBUTORS_STATE')<undefined>()

export const resetContributorState = createAction('RESET_CONTRIBUTOR_STATE')<undefined>()
// #endregion Contributors

// #region ContributorSnsHandles
export const loadContributorSnsHandlesAsync = createAsyncAction(
  'LOAD_CONTRIBUTOR_SNS_HANDLES_REQUEST',
  'LOAD_CONTRIBUTOR_SNS_HANDLES_SUCCESS',
  'LOAD_CONTRIBUTOR_SNS_HANDLES_FAILURE'
)<ContributorSnsHandlesSearchOption, ContributorSnsHandlesModel, RestException>()

export const appendContributorSnsHandlesAsync = createAsyncAction(
  'APPEND_CONTRIBUTOR_SNS_HANDLES_REQUEST',
  'APPEND_CONTRIBUTOR_SNS_HANDLES_SUCCESS',
  'APPEND_CONTRIBUTOR_SNS_HANDLES_FAILURE'
)<ContributorSnsHandlesSearchOption, ContributorSnsHandlesModel, RestException>()

export const loadContributorSnsHandleAsync = createAsyncAction(
  'LOAD_CONTRIBUTOR_SNS_HANDLE_REQUEST',
  'LOAD_CONTRIBUTOR_SNS_HANDLE_SUCCESS',
  'LOAD_CONTRIBUTOR_SNS_HANDLE_FAILURE'
)<ContributorSnsHnadleSearchOption, SnsHandleModel, RestException>()

export const resetContributorSnsHandlesState = createAction('RESET_CONTRIBUTOR_SNS_HANDLES_STATE')<undefined>()

export const resetContributorSnsHandleState = createAction('RESET_CONTRIBUTOR_SNS_HANDLE_STATE')<undefined>()
// #endregion ContributorSnsHandles

export type ContributorsActionTypes =
  | ActionType<typeof loadContributorsAsync>
  | ActionType<typeof appendContributorsAsync>
  | ActionType<typeof loadContributorAsync>
  | ActionType<typeof loadTranslatedContributorAsync>
  | ActionType<typeof resetContributorsState>
  | ActionType<typeof resetContributorState>
  | ActionType<typeof loadContributorSnsHandlesAsync>
  | ActionType<typeof appendContributorSnsHandlesAsync>
  | ActionType<typeof loadContributorSnsHandleAsync>
  | ActionType<typeof resetContributorSnsHandlesState>
  | ActionType<typeof resetContributorSnsHandleState>
