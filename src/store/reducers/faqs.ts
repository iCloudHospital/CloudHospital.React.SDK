import { FaqsModel, FaqModel, MediasModel, MediaModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import {
  appendFaqMediasAsync,
  appendFaqsAsync,
  loadFaqAsync,
  loadFaqMediaAsync,
  loadFaqMediasAsync,
  loadFaqsAsync,
  resetFaqsState,
  resetFaqState,
  FaqsActionTypes
} from '../actions/faqs'

// #region Faqs
export const isLoadingFaqs = createReducer<boolean, FaqsActionTypes>(false as boolean)
  .handleAction(
    [resetFaqsState, loadFaqsAsync.success, loadFaqsAsync.failure, appendFaqsAsync.success, appendFaqsAsync.failure],
    (state, action) => false
  )
  .handleAction([loadFaqsAsync.request, appendFaqsAsync.request], (state, action) => true)

export const loadFaqsErrors = createReducer<RestException | null, FaqsActionTypes>(null)
  .handleAction(
    [resetFaqsState, loadFaqsAsync.request, loadFaqsAsync.success, appendFaqsAsync.request, appendFaqsAsync.success],
    (state, action) => null
  )
  .handleAction([loadFaqsAsync.failure, appendFaqsAsync.failure], (state, action) => action.payload)

export const hasMoreFaqs = createReducer<boolean | null, FaqsActionTypes>(null)
  .handleAction(
    [loadFaqsAsync.success, appendFaqsAsync.success],
    (state, action) => action.payload.metaData?.hasNextPage ?? null
  )
  .handleAction(
    [loadFaqsAsync.request, loadFaqsAsync.failure, appendFaqsAsync.request, appendFaqsAsync.failure],
    (state, action) => true
  )

export const faqs = createReducer<FaqsModel | null, FaqsActionTypes>(null)
  .handleAction([resetFaqsState, loadFaqsAsync.failure], (state, action) => null)
  .handleAction([loadFaqsAsync.success], (state, action) => action.payload)
  .handleAction([appendFaqsAsync.success], (state, action) => {
    const faqsModel = {
      items: {},
      metaData: {}
    } as FaqsModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    faqsModel.items = newItems
    faqsModel.metaData = action.payload.metaData

    return faqsModel
  })

export const isLoadingFaq = createReducer<boolean, FaqsActionTypes>(false as boolean)
  .handleAction([resetFaqState, loadFaqAsync.success, loadFaqAsync.failure], (state, action) => false)
  .handleAction([loadFaqAsync.request], (state, action) => true)

export const loadFaqErrors = createReducer<RestException | null, FaqsActionTypes>(null)
  .handleAction([resetFaqState, loadFaqAsync.request, loadFaqAsync.success], (state, action) => null)
  .handleAction([loadFaqAsync.failure], (state, action) => action.payload)

export const faq = createReducer<FaqModel | null, FaqsActionTypes>(null)
  .handleAction([resetFaqState, loadFaqAsync.failure], (state, action) => null)
  .handleAction([loadFaqAsync.success], (state, action) => action.payload)
// #endregion Faqs

// #region FaqMedias
export const isLoadingFaqMedias = createReducer<boolean, FaqsActionTypes>(false as boolean)
  .handleAction(
    [
      resetFaqState,
      loadFaqMediasAsync.success,
      loadFaqMediasAsync.failure,
      appendFaqMediasAsync.success,
      appendFaqMediasAsync.failure
    ],
    (state, action) => false
  )
  .handleAction([loadFaqMediasAsync.request, appendFaqMediasAsync.request], (state, action) => true)

export const loadFaqMediasErrors = createReducer<RestException | null, FaqsActionTypes>(null)
  .handleAction(
    [
      resetFaqState,
      loadFaqMediasAsync.request,
      loadFaqMediasAsync.success,
      appendFaqMediasAsync.request,
      appendFaqMediasAsync.success
    ],
    (state, action) => null
  )
  .handleAction([loadFaqsAsync.failure, appendFaqsAsync.failure], (state, action) => action.payload)

export const faqMedias = createReducer<MediasModel | null, FaqsActionTypes>(null)
  .handleAction([resetFaqState, loadFaqsAsync.failure], (state, action) => null)
  .handleAction([loadFaqMediasAsync.success], (state, action) => action.payload)
  .handleAction([appendFaqMediasAsync.success], (state, action) => {
    const mediasModel = {
      items: {},
      metaData: {}
    } as MediasModel

    const newItems =
      state && action.payload.metaData?.pageNumber !== 1
        ? state.items?.concat(action.payload.items!)
        : action.payload.items
    mediasModel.items = newItems
    mediasModel.metaData = action.payload.metaData

    return mediasModel
  })

export const isLoadingFaqMedia = createReducer<boolean, FaqsActionTypes>(false as boolean)
  .handleAction([resetFaqState, loadFaqMediaAsync.success, loadFaqMediaAsync.failure], (state, action) => false)
  .handleAction([loadFaqMediaAsync.request], (state, action) => true)

export const loadFaqMediaErrors = createReducer<RestException | null, FaqsActionTypes>(null)
  .handleAction([resetFaqState, loadFaqMediaAsync.request, loadFaqMediaAsync.success], (state, action) => null)
  .handleAction([loadFaqMediaAsync.failure], (state, action) => action.payload)

export const faqMedia = createReducer<MediaModel | null, FaqsActionTypes>(null)
  .handleAction([resetFaqState, loadFaqMediaAsync.request, loadFaqMediaAsync.failure], (state, action) => null)
  .handleAction([loadFaqMediaAsync.success], (state, action) => action.payload)
// #endregion FaqMedias
const faqsState = combineReducers({
  isLoadingFaqs,
  loadFaqsErrors,
  hasMoreFaqs,
  faqs,

  isLoadingFaq,
  loadFaqErrors,
  faq,

  isLoadingFaqMedias,
  loadFaqMediasErrors,
  faqMedias,

  isLoadingFaqMedia,
  loadFaqMediaErrors,
  faqMedia
})

export default faqsState
export type FaqsState = ReturnType<typeof faqsState>
