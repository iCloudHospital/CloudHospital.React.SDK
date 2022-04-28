import { combineEpics } from 'redux-observable'
import { from, of } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'

import { RestException } from '../../models/exceptions'
import {
  loadHospitalEquipmentsAsync,
  appendHospitalEquipmentsAsync,
  loadHospitalEquipmentAsync,
  loadHospitalEquipmentMediasAsync,
  appendHospitalEquipmentMediasAsync,
  loadHospitalEquipmentMediaAsync
} from '../actions/hospitalEquipments'

// #region HospitalEquipments
export const loadHospitalEquipmentsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalEquipmentsAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipments(action.payload)).pipe(
        map(loadHospitalEquipmentsAsync.success),
        catchError((restException: RestException) => of(loadHospitalEquipmentsAsync.failure(restException)))
      )
    )
  )

export const appendHospitalEquipmentsEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalEquipmentsAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipments(action.payload)).pipe(
        map(appendHospitalEquipmentsAsync.success),
        catchError((restException: RestException) => of(appendHospitalEquipmentsAsync.failure(restException)))
      )
    )
  )

export const loadHospitalEquipmentEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalEquipmentAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipment(action.payload.hospitalId, action.payload.equipmentId)).pipe(
        map(loadHospitalEquipmentAsync.success),
        catchError((restException: RestException) => of(loadHospitalEquipmentAsync.failure(restException)))
      )
    )
  )
// #endregion HospitalEquipments

// #region HospitalEquipmentMedias
export const loadHospitalEquipmentMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalEquipmentMediasAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipmentMedias(action.payload)).pipe(
        map(loadHospitalEquipmentMediasAsync.success),
        catchError((restException: RestException) => of(loadHospitalEquipmentMediasAsync.failure(restException)))
      )
    )
  )

export const appendHospitalEquipmentMediasEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(appendHospitalEquipmentMediasAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipmentMedias(action.payload)).pipe(
        map(appendHospitalEquipmentMediasAsync.success),
        catchError((restException: RestException) => of(appendHospitalEquipmentMediasAsync.failure(restException)))
      )
    )
  )

export const loadHospitalEquipmentMediaEpic: RootEpic = (action$, state$, { apis }) =>
  action$.pipe(
    filter(isActionOf(loadHospitalEquipmentMediaAsync.request)),
    switchMap((action) =>
      from(apis.hospitalEquipments.loadHospitalEquipmentMedia(action.payload)).pipe(
        map(loadHospitalEquipmentMediaAsync.success),
        catchError((restException: RestException) => of(loadHospitalEquipmentMediaAsync.failure(restException)))
      )
    )
  )
// #endregion HospitalEquipmentMedias

const hospitalEquipmentsEpic = combineEpics(
  loadHospitalEquipmentsEpic,
  appendHospitalEquipmentsEpic,
  loadHospitalEquipmentEpic,

  loadHospitalEquipmentMediasEpic,
  loadHospitalEquipmentMediaEpic
)
export default hospitalEquipmentsEpic
