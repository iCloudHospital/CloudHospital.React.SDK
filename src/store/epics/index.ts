import { combineEpics } from 'redux-observable'
import accountsEpic from './accounts'
import externalLoginsEpic from './externalLogins'
import accreditationsEpic from './accreditations'
import articlesEpic from './articles'
import articleContributorsEpic from './articleContributors'
import articleMediasEpic from './articleMedias'
import articleSourcesEpic from './articleSources'
import bookingsEpic from './bookings'
import chatsEpic from './chats'
import communicationsEpic from './communications'
import consultationsEpic from './consultations'
import contributorsEpic from './contributors'
import countriesEpic from './countries'
import dealsEpic from './deals'
import doctorsEpic from './doctors'
import doctorCertificatesEpic from './doctorCertificates'
import doctorEducationsEpic from './doctorEducations'
import doctorMediasEpic from './doctorMedias'
import doctorPortfoliosEpic from './doctorPortfolios'
import doctorSpecialtiesEpic from './doctorSpecialties'
import faqCategoriesEpic from './faqCategories'
import faqsEpic from './faqs'
import hospitalsEpic from './hospitals'
import hospitalAccreditationsEpic from './hospitalAccreditations'
import hospitalEquipmentsEpic from './hospitalEquipments'
import hospitalSpecialtiesEpic from './hospitalSpecialties'
import hospitalServicesEpic from './hospitalServices'
import imagesEpic from './images'
import languagesEpic from './languages'
import membershipsEpic from './memberships'
import notificationsEpic from './notifications'
import patientsEpic from './patients'
import plansEpic from './plans'
import profilesEpic from './profiles'
import servicesEpic from './services'
import servicesCategoriesEpic from './servicesCategories'
import specialtiesEpic from './specialties'
import specialtyTypesEpic from './specialtyTypes'
import tagsEpic from './tags'
import azSearchEpic from './azSearch'

export default combineEpics(
  accountsEpic,
  externalLoginsEpic,
  accreditationsEpic,
  articlesEpic,
  articleContributorsEpic,
  articleMediasEpic,
  articleSourcesEpic,
  bookingsEpic,
  chatsEpic,
  communicationsEpic,
  consultationsEpic,
  contributorsEpic,
  countriesEpic,
  dealsEpic,
  doctorsEpic,
  doctorCertificatesEpic,
  doctorEducationsEpic,
  doctorMediasEpic,
  doctorPortfoliosEpic,
  doctorSpecialtiesEpic,
  faqCategoriesEpic,
  faqsEpic,
  hospitalsEpic,
  hospitalAccreditationsEpic,
  hospitalEquipmentsEpic,
  hospitalSpecialtiesEpic,
  hospitalServicesEpic,
  imagesEpic,
  languagesEpic,
  membershipsEpic,
  notificationsEpic,
  patientsEpic,
  plansEpic,
  profilesEpic,
  servicesEpic,
  servicesCategoriesEpic,
  specialtiesEpic,
  specialtyTypesEpic,
  tagsEpic,
  azSearchEpic,
)
