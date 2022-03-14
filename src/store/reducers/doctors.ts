import {
  DoctorsModel,
  DoctorModel,
  DoctorAffiliationsModel,
  DoctorAffiliationModel
} from 'ch-api-client-typescript2/lib'
import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { searchDoctors } from '../../services/search'
import {
  DoctorsActionTypes,
  loadDoctorAsync,
  loadDoctorsAsync,
  appendDoctorsAsync,
  loadTranslatedDoctorAsync,
  resetDoctorState,
  resetDoctorsState,
  loadDoctorAffiliationsAsync,
  loadDoctorAffiliationAsync,
  resetDoctorAffiliationState,
  resetDoctorAffiliationsState
} from '../actions/doctors'
import { AzSearchActionTypes, searchDoctorsAsync } from '../actions/azSearch'
// #region Doctors
export const isLoadingDoctors = createReducer<boolean, DoctorsActionTypes | AzSearchActionTypes>(false as boolean)
  .handleAction([
    resetDoctorsState, 
    loadDoctorsAsync.success, 
    loadDoctorsAsync.failure,
    searchDoctorsAsync.success,
    searchDoctorsAsync.failure
  ], 
  (state, action) => false)
  .handleAction([loadDoctorsAsync.request, searchDoctorsAsync.request], (state, action) => true)

export const loadDoctorsErrors = createReducer<RestException | null, DoctorsActionTypes>(null)
  .handleAction([resetDoctorsState, loadDoctorsAsync.request, loadDoctorsAsync.success], (state, action) => null)
  .handleAction([loadDoctorsAsync.failure], (state, action) => action.payload)

export const doctors = createReducer<DoctorsModel | null, DoctorsActionTypes>(null)
  .handleAction([resetDoctorsState, loadDoctorsAsync.failure], (state, action) => null)
  .handleAction([loadDoctorsAsync.success], (state, action) => action.payload)
  .handleAction([appendDoctorsAsync.success], (state, action) => {
    const doctorsViewModel = {
      item: {},
      metaData: {}
    } as DoctorsModel

    const newItems = state ? state.items?.concat(action.payload.items!) : action.payload.items
    doctorsViewModel.items = newItems
    doctorsViewModel.metaData = action.payload.metaData

    return doctorsViewModel
  })

export const isLoadingDoctor = createReducer<boolean, DoctorsActionTypes>(false as boolean)
  .handleAction(
    [
      resetDoctorState,
      loadDoctorAsync.success,
      loadDoctorAsync.failure,
      loadTranslatedDoctorAsync.success,
      loadTranslatedDoctorAsync.failure,
      appendDoctorsAsync.success,
      appendDoctorsAsync.failure
    ],
    (state, action) => false
  )
  .handleAction(
    [loadDoctorAsync.request, loadTranslatedDoctorAsync.request, appendDoctorsAsync.request],
    (state, action) => true
  )

export const loadDoctorErrors = createReducer<RestException | null, DoctorsActionTypes>(null)
  .handleAction(
    [
      resetDoctorState,
      loadDoctorAsync.request,
      loadDoctorAsync.success,
      loadTranslatedDoctorAsync.request,
      loadTranslatedDoctorAsync.success,
      appendDoctorsAsync.request
    ],
    (state, action) => null
  )
  .handleAction([loadDoctorAsync.failure, loadTranslatedDoctorAsync.failure], (state, action) => action.payload)

export const doctor = createReducer<DoctorModel | null, DoctorsActionTypes>(null)
  .handleAction([resetDoctorState, loadDoctorAsync.request, loadDoctorAsync.failure], (state, action) => null)
  .handleAction([loadDoctorAsync.success], (state, action) => action.payload)

export const translatedDoctor = createReducer<DoctorModel | null, DoctorsActionTypes>(null)
  .handleAction(
    [resetDoctorState, loadTranslatedDoctorAsync.request, loadTranslatedDoctorAsync.failure],
    (state, action) => null
  )
  .handleAction([loadTranslatedDoctorAsync.success], (state, action) => action.payload)
// #endregion Doctors

// #region Doctor Affiliations
export const isLoadingDoctorAffiliations = createReducer<boolean, DoctorsActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorAffiliationsState, loadDoctorAffiliationsAsync.success, loadDoctorAffiliationsAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorAffiliationsAsync.request], (state, action) => true)

export const loadDoctorAffiliationsErrors = createReducer<RestException | null, DoctorsActionTypes>(null)
  .handleAction(
    [resetDoctorAffiliationsState, loadDoctorAffiliationsAsync.request, loadDoctorAffiliationsAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorAffiliationsAsync.failure], (state, action) => action.payload)

export const doctorAffiliations = createReducer<DoctorAffiliationsModel | null, DoctorsActionTypes>(null)
  .handleAction([resetDoctorAffiliationsState, loadDoctorAffiliationsAsync.failure], (state, action) => null)
  .handleAction([loadDoctorAffiliationsAsync.success], (state, action) => action.payload)

export const isLoadingDoctorAffiliation = createReducer<boolean, DoctorsActionTypes>(false as boolean)
  .handleAction(
    [resetDoctorAffiliationState, loadDoctorAffiliationAsync.success, loadDoctorAffiliationAsync.failure],
    (state, action) => false
  )
  .handleAction([loadDoctorAffiliationAsync.request], (state, action) => true)

export const loadDoctorAffiliationErrors = createReducer<RestException | null, DoctorsActionTypes>(null)
  .handleAction(
    [resetDoctorAffiliationState, loadDoctorAffiliationAsync.request, loadDoctorAffiliationAsync.success],
    (state, action) => null
  )
  .handleAction([loadDoctorAffiliationAsync.failure], (state, action) => action.payload)

export const doctorAffiliation = createReducer<DoctorAffiliationModel | null, DoctorsActionTypes>(null)
  .handleAction(
    [resetDoctorAffiliationState, loadDoctorAffiliationAsync.request, loadDoctorAffiliationAsync.failure],
    (state, action) => null
  )
  .handleAction([loadDoctorAffiliationAsync.success], (state, action) => action.payload)
// #endregion Doctor Affiliations

const doctorsState = combineReducers({
  isLoadingDoctors,
  loadDoctorsErrors,
  doctors,

  isLoadingDoctor,
  loadDoctorErrors,
  doctor,
  translatedDoctor,

  isLoadingDoctorAffiliations,
  loadDoctorAffiliationsErrors,
  doctorAffiliations,

  isLoadingDoctorAffiliation,
  loadDoctorAffiliationErrors,
  doctorAffiliation
})

export default doctorsState
export type DoctorsState = ReturnType<typeof doctorsState>
