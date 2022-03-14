import { LanguageModel, LanguagesModel } from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { appendLanguagesAsync, LanguagesActionTypes, loadLanguageAsync, loadLanguagesAsync } from '../actions/languages'

export const isLoadingLanguages = createReducer<boolean, LanguagesActionTypes>(false)
  .handleAction([loadLanguagesAsync.request, appendLanguagesAsync.request], (_, __) => true)
  .handleAction(
    [
      loadLanguagesAsync.success,
      loadLanguagesAsync.failure,
      appendLanguagesAsync.success,
      appendLanguagesAsync.failure
    ],
    (_, __) => false
  )

export const loadLanguagesErrors = createReducer<RestException | null, LanguagesActionTypes>(null)
  .handleAction([loadLanguagesAsync.request, loadLanguagesAsync.success], (state, action) => null)
  .handleAction([loadLanguagesAsync.failure], (state, action) => action.payload)

export const languages = createReducer<LanguagesModel | null, LanguagesActionTypes>(null)
  .handleAction([loadLanguagesAsync.request, loadLanguagesAsync.failure], (_, __) => null)
  .handleAction([loadLanguagesAsync.success], (state, action) => action.payload)
  .handleAction([appendLanguagesAsync.success], (state, action) => {
    return {
      items: state ? state.items?.concat(action.payload.items ?? []) : action.payload.items,
      metaData: action.payload.metaData
    }
  })

export const isLoadingLanguage = createReducer<boolean, LanguagesActionTypes>(false)
  .handleAction([loadLanguageAsync.request], (_, __) => true)
  .handleAction([loadLanguageAsync.success, loadLanguageAsync.failure], (_, __) => false)

export const loadLanguageErrors = createReducer<RestException | null, LanguagesActionTypes>(null)
  .handleAction([loadLanguageAsync.request, loadLanguageAsync.success], (state, action) => null)
  .handleAction([loadLanguageAsync.failure], (state, action) => action.payload)

export const language = createReducer<LanguageModel | null, LanguagesActionTypes>(null)
  .handleAction([loadLanguageAsync.request, loadLanguageAsync.failure], (_, __) => null)
  .handleAction([loadLanguageAsync.success], (state, action) => action.payload)

const languagesState = combineReducers({
  isLoadingLanguages,
  loadLanguagesErrors,
  languages,
  isLoadingLanguage,
  loadLanguageErrors,
  language
})

export type LanguageState = ReturnType<typeof languagesState>

export default languagesState
