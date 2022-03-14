import { combineEpics } from 'redux-observable'
import { RootEpic } from 'CHTypes'
import { isActionOf } from 'typesafe-actions'
import { RestException } from '../../models/exceptions'
import { from, of, tap } from 'rxjs'
import { catchError, filter, map, switchMap } from 'rxjs/operators'
import { azSearchAutocompleteAsync, getSearchCountAsync, searchDealsAsync, searchDoctorsAsync, searchHospitalsAsync, searchSpecialtiesAsync, searchSpecialtyTypesAsync } from '../actions/azSearch'
import { loadHospitalsAsync } from '../actions/hospitals'
import { loadDoctorsAsync } from '../actions/doctors'
import { loadDealsAsync } from '../actions/deals'
import { loadSpecialtiesAsync } from '../actions/specialties'
import { loadSpecialtyTypesAsync } from '../actions/specialtyTypes'

export const searchHospitalsEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(searchHospitalsAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.searchHospitals(action.payload)).pipe(
        map(loadHospitalsAsync.success), catchError((restException: RestException) => of(loadHospitalsAsync.failure(restException)))
      )
    )
  )

export const searchDoctorsEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(searchDoctorsAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.searchDoctors(action.payload)).pipe(
        map(loadDoctorsAsync.success), catchError((restException: RestException) => of(loadDoctorsAsync.failure(restException)))
      )
    )
  )

export const searchDealsEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(searchDealsAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.searchDeals(action.payload)).pipe(
        map(loadDealsAsync.success), catchError((restException: RestException) => of(loadDealsAsync.failure(restException)))
      )
    )
  )

export const searchSpecialtiesEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(searchSpecialtiesAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.searchSpecialties(action.payload)).pipe(
        map(loadSpecialtiesAsync.success), catchError((restException: RestException) => of(loadSpecialtiesAsync.failure(restException)))
      )
    )
  )

export const searchSpecialtyTypesEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(searchSpecialtyTypesAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.searchSpecialtyTypes(action.payload)).pipe(
        map(loadSpecialtyTypesAsync.success), catchError((restException: RestException) => of(loadSpecialtyTypesAsync.failure(restException)))
      )
    )
  )

export const azSearchAutocompleteEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(azSearchAutocompleteAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.azSearchAutocomplete(action.payload)).pipe(
        map(azSearchAutocompleteAsync.success), catchError((restException: RestException) => of(azSearchAutocompleteAsync.failure(restException)))
      )
    )
  )

export const loadSearchCountEpic: RootEpic = (action$, state$, { apis }) => 
  action$.pipe(
    filter(isActionOf(getSearchCountAsync.request)),
    switchMap((action) => 
      from(apis.azSearch.getSearchCount(action.payload)).pipe(
        map(getSearchCountAsync.success), catchError((restException: RestException) => of(getSearchCountAsync.failure(restException)))
      )
    )
  )
  
const azSearchEpic = combineEpics(
  searchHospitalsEpic,
  searchDoctorsEpic,
  searchDealsEpic,
  searchSpecialtiesEpic,
  searchSpecialtyTypesEpic,
  azSearchAutocompleteEpic,
  loadSearchCountEpic
)

export default azSearchEpic