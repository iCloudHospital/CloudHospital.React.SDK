import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import accountsState from './accounts'
import azSearchState from './azSearch'
import accreditationsState from './accreditations'
import articlesState from './articles'
import articleContributorsState from './articleContributors'
import articleMediasState from './articleMedias'
import articleSourcesState from './articleSources'
import bookingsState from './bookings'
import chatsState from './chats'
import communicationsState from './communications'
import consultationsState from './consultations'
import contributorsState from './contributors'
import countriesState from './countries'
import dealsState from './deals'
import doctorsState from './doctors'
import doctorCertificatesState from './doctorCertificates'
import doctorEducationsState from './doctorEducations'
import doctorMediasState from './doctorMedias'
import doctorPortfoliosState from './doctorPortfolios'
import doctorSpecialtiesState from './doctorSpecialties'
import externalLoginsState from './externalLogins'
import faqCategoriesState from './faqCategories'
import faqsState from './faqs'
import hospitalsState from './hospitals'
import hospitalAccreditationsState from './hospitalAccreditations'
import hospitalEquipmentsState from './hospitalEquipments'
import hospitalSpecialtiesState from './hospitalSpecialties'
import hospitalServicesState from './hospitalServices'
import imagesState from './images'
import languagesState from './languages'
import modalState from './modals'
import membershipsState from './memberships'
import notificationsState from './notifications'
import patientsState from './patients'
import plansState from './plans'
import profilesState from './profiles'
import servicesState from './services'
import servicesCategoriesState from './servicesCategories'
import specialtiesState from './specialties'
import specialtyTypesState from './specialtyTypes'
import tagsState from './tags'
import toastMessageState from './toastMessages'
import navsState from './navs'
import signInRequestState from './signInRequest'
import serviceReviewsState from './serviceReviews'
import languagesSelectOptionState from './languageSelectOption'
import groupChannelsState from './groupChannels'
import serviceReviewsSurgeryState from './serviceReviewsSurgery'

const rootReducer = combineReducers({
  accountsState,
  azSearchState,
  accreditationsState,
  articlesState,
  articleContributorsState,
  articleMediasState,
  articleSourcesState,
  bookingsState,
  chatsState,
  communicationsState,
  consultationsState,
  contributorsState,
  countriesState,
  dealsState,
  doctorsState,
  doctorCertificatesState,
  doctorEducationsState,
  doctorMediasState,
  doctorPortfoliosState,
  doctorSpecialtiesState,
  externalLoginsState,
  faqCategoriesState,
  faqsState,
  groupChannelsState,
  hospitalsState,
  hospitalAccreditationsState,
  hospitalEquipmentsState,
  hospitalSpecialtiesState,
  hospitalServicesState,
  imagesState,
  languagesState,
  languagesSelectOptionState,
  modalState,
  membershipsState,
  navsState,
  notificationsState,
  patientsState,
  plansState,
  profilesState,
  servicesState,
  servicesCategoriesState,
  signInRequestState,
  specialtiesState,
  specialtyTypesState,
  serviceReviewsState,
  serviceReviewsSurgeryState,
  tagsState,
  toastMessageState
})

export type RootReducer = StateType<typeof rootReducer>

export default rootReducer
