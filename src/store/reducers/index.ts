import { StateType } from 'typesafe-actions'
import { combineReducers } from 'redux'
import accountsState from './accounts'
import externalLoginsState from './externalLogins'
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
import faqCategoriesState from './faqCategories'
import faqsState from './faqs'
import hospitalsState from './hospitals'
import hospitalAccreditationsState from './hospitalAccreditations'
import hospitalEquipmentsState from './hospitalEquipments'
import hospitalSpecialtiesState from './hospitalSpecialties'
import hospitalServicesState from './hospitalServices'
import imagesState from './images'
import languagesState from './languages'
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
import sideNavState from './sideNav'
import modalState from './modals'
import azSearchState from './azSearch'
import custopmPopupState from './popups'

const rootReducer = combineReducers({
  accountsState,
  externalLoginsState,
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
  faqCategoriesState,
  faqsState,
  hospitalsState,
  hospitalAccreditationsState,
  hospitalEquipmentsState,
  hospitalSpecialtiesState,
  hospitalServicesState,
  imagesState,
  languagesState,
  membershipsState,
  notificationsState,
  patientsState,
  plansState,
  profilesState,
  servicesState,
  servicesCategoriesState,
  specialtiesState,
  specialtyTypesState,
  tagsState,
  toastMessageState,
  sideNavState,
  modalState,
  azSearchState,
  custopmPopupState,
})

export type RootReducer = StateType<typeof rootReducer>

export default rootReducer
