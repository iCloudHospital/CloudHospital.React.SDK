import { createAsyncAction, ActionType } from 'typesafe-actions'
import { LanguageModel, LanguagesModel } from 'ch-api-client-typescript2/lib'
import { LanguageSearchOption, LanguagesSearchOption } from '../../models/langauges'
import { RestException } from '../../models/exceptions'

export const loadLanguagesAsync = createAsyncAction(
  'LOAD_LANGUAGES_REQUEST',
  'LOAD_LANGUAGES_SUCCESS',
  'LOAD_LANGUAGES_FAILURE'
)<LanguagesSearchOption, LanguagesModel, RestException>()

export const appendLanguagesAsync = createAsyncAction(
  'APPEND_LANGUAGES_REQUEST',
  'APPEND_LANGUAGES_SUCCESS',
  'APPEND_LANGUAGES_FAILURE'
)<LanguagesSearchOption, LanguagesModel, RestException>()

export const loadLanguageAsync = createAsyncAction(
  'LOAD_LANGUAGE_REQUEST',
  'LOAD_LANGUAGE_SUCCESS',
  'LOAD_LANGUAGE_FAILURE'
)<LanguageSearchOption, LanguageModel, RestException>()

export type LanguagesActionTypes =
  | ActionType<typeof loadLanguagesAsync>
  | ActionType<typeof appendLanguagesAsync>
  | ActionType<typeof loadLanguageAsync>
