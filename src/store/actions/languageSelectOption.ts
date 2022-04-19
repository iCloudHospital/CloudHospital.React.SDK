import { ActionType, createAction } from 'typesafe-actions'
import { SelectOption } from '../../models'

export const loadLanguageSelectOption = createAction('LOAD_LANGUAGE_SELECT_OPTION')<SelectOption[]>()

export const resetLanguageSelectOptionState = createAction('RESET_LANGUAGE_SELECT_OPTION_STATE')<undefined>()

export type LanguagesSelectOptionActionType =
  | ActionType<typeof loadLanguageSelectOption>
  | ActionType<typeof resetLanguageSelectOptionState>
