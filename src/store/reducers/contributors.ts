import {
  ContributorsModel,
  ContributorModel,
  ContributorSnsHandlesModel,
  SnsHandleModel
} from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  ContributorsActionTypes,
  loadContributorsAsync,
  loadContributorAsync,
  appendContributorsAsync,
  resetContributorsState,
  resetContributorState,
  resetContributorSnsHandlesState,
  loadContributorSnsHandlesAsync,
  resetContributorSnsHandleState,
  loadTranslatedContributorAsync
} from '../actions/contributors'

// #region Contributors
export const isLoadingContributors = createReducer<boolean, ContributorsActionTypes>(false as boolean)
  .handleAction(
    [
      resetContributorsState,
      loadContributorsAsync.success,
      loadContributorsAsync.failure,
      appendContributorsAsync.success,
      appendContributorsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadContributorsAsync.request, appendContributorsAsync.request], (state, action) => true)

export const loadContributorsErrors = createReducer<RestException | null, ContributorsActionTypes>(null)
  .handleAction(
    [
      resetContributorsState,
      loadContributorsAsync.request,
      loadContributorsAsync.success,
      appendContributorsAsync.request,
      appendContributorsAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadContributorsAsync.failure, appendContributorsAsync.failure], (state, action) => action.payload)

export const contributors = createReducer<ContributorsModel | null, ContributorsActionTypes>(null)
  .handleAction([resetContributorsState, loadContributorsAsync.failure], (state, action) => null)
  .handleAction([loadContributorsAsync.success], (state, action) => action.payload)
  .handleAction([appendContributorsAsync.success], (state, action) => {
    const contributorsModel = {
      items: {},
      metaData: {}
    } as ContributorsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    contributorsModel.items = newItems
    contributorsModel.metaData = action.payload.metaData

    return contributorsModel
  })

export const isLoadingContributor = createReducer<boolean, ContributorsActionTypes>(false as boolean)
  .handleAction(
    [
      resetContributorState,
      loadContributorAsync.success,
      loadContributorAsync.failure,
      loadTranslatedContributorAsync.success,
      loadTranslatedContributorAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadContributorAsync.request, loadTranslatedContributorAsync.request], (state, action) => true)

export const loadContributorErrors = createReducer<RestException | null, ContributorsActionTypes>(null)
  .handleAction(
    [
      resetContributorState,
      loadContributorAsync.request,
      loadContributorAsync.success,
      loadTranslatedContributorAsync.request,
      loadTranslatedContributorAsync.success
    ],
    (state, action) => null
  )
  .handleAction(
    [loadContributorAsync.failure, appendContributorsAsync.failure, loadTranslatedContributorAsync.failure],
    (state, action) => action.payload
  )

export const contributor = createReducer<ContributorModel | null, ContributorsActionTypes>(null)
  .handleAction([resetContributorState, loadContributorAsync.failure], (state, action) => null)
  .handleAction([loadContributorAsync.success], (state, action) => action.payload)

export const translatedContributor = createReducer<ContributorModel | null, ContributorsActionTypes>(null)
  .handleAction(
    [resetContributorState, loadTranslatedContributorAsync.request, loadTranslatedContributorAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedContributorAsync.success], (state, action) => action.payload)
// #endregion Contributors

// #region ContributorSnsHandles
export const isLoadingContributorSnsHandles = createReducer<boolean, ContributorsActionTypes>(false as boolean)
  .handleAction(
    [resetContributorSnsHandlesState, loadContributorSnsHandlesAsync.success, loadContributorSnsHandlesAsync.failure],
    (state, action) => false
  )
  .handleAction([loadContributorSnsHandlesAsync.request], (state, action) => true)

export const loadContributorSnsHandlesErrors = createReducer<RestException | null, ContributorsActionTypes>(null)
  .handleAction(
    [resetContributorSnsHandlesState, loadContributorSnsHandlesAsync.request, loadContributorSnsHandlesAsync.success],
    (state, action) => null
  )
  .handleAction([loadContributorSnsHandlesAsync.failure], (state, action) => action.payload)

export const contributorSnsHandles = createReducer<ContributorSnsHandlesModel | null, ContributorsActionTypes>(null)
  .handleAction([resetContributorSnsHandlesState, loadContributorSnsHandlesAsync.failure], (state, action) => null)
  .handleAction([loadContributorSnsHandlesAsync.success], (state, action) => action.payload)
// #endregion ContributorSnsHandles

const contributorsState = combineReducers({
  isLoadingContributors,
  loadContributorsErrors,
  contributors,
  isLoadingContributor,
  loadContributorErrors,
  contributor,
  translatedContributor,

  isLoadingContributorSnsHandles,
  loadContributorSnsHandlesErrors,
  contributorSnsHandles
})

export default contributorsState
export type ContributorsState = ReturnType<typeof contributorsState>
