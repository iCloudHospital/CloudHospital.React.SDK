import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { SelectOption } from '../../models'
import {
  LanguagesSelectOptionActionType,
  loadLanguageSelectOption,
  resetLanguageSelectOptionState
} from '../actions/languageSelectOption'

const languageSelectOption = createReducer<SelectOption[] | null, LanguagesSelectOptionActionType>(null)
  .handleAction([loadLanguageSelectOption], (state, action) => action.payload)
  .handleAction([resetLanguageSelectOptionState], (state, action) => null)

const languagesSelectOptionState = combineReducers({
  languageSelectOption
})

export default languagesSelectOptionState
export type LanguagesSelectOptionState = ReturnType<typeof languagesSelectOptionState>
