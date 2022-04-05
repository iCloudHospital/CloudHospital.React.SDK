import { ActionType } from 'typesafe-actions'
import * as accounts from './accounts'
import * as azSearch from './azSearch'
import * as accreditations from './accreditations'
import * as articles from './articles'
import * as articleContributors from './articleContributors'
import * as articleMedias from './articleMedias'
import * as articleSources from './articleSources'
import * as bookings from './bookings'
import * as chats from './chats'
import * as communications from './communications'
import * as consultations from './consultations'
import * as contributors from './contributors'
import * as countries from './countries'
import * as deals from './deals'
import * as doctors from './doctors'
import * as doctorCertificates from './doctorCertificates'
import * as doctorEducations from './doctorEducations'
import * as doctorMedias from './doctorMedias'
import * as doctorPortfolios from './doctorPortfolios'
import * as doctorSpecialties from './doctorSpecialties'
import * as externalLogins from './externalLogins'
import * as faqCategories from './faqCategories'
import * as faqs from './faqs'
import * as hospitals from './hospitals'
import * as hospitalAccreditations from './hospitalAccreditations'
import * as hospitalEquipments from './hospitalEquipments'
import * as hospitalSpecialties from './hospitalSpecialties'
import * as hospitalServices from './hospitalServices'
import * as images from './images'
import * as languages from './languages'
import * as memberships from './memberships'
import * as notifications from './notifications'
import * as patients from './patients'
import * as plans from './plans'
import * as profiles from './profiles'
import * as services from './services'
import * as servicesCategories from './servicesCategories'
import * as specialties from './specialties'
import * as specialtyTypes from './specialtyTypes'
import * as tags from './tags'
import * as toastMessages from './toastMessages'
import * as navs from './navs'
import * as signInRequest from './signInRequest'

const rootAction = {
  accounts,
  azSearch,
  accreditations,
  articles,
  articleContributors,
  articleMedias,
  articleSources,
  bookings,
  chats,
  communications,
  consultations,
  contributors,
  countries,
  deals,
  doctors,
  doctorCertificates,
  doctorEducations,
  doctorMedias,
  doctorPortfolios,
  doctorSpecialties,
  externalLogins,
  faqCategories,
  faqs,
  hospitals,
  hospitalAccreditations,
  hospitalEquipments,
  hospitalSpecialties,
  hospitalServices,
  images,
  languages,
  memberships,
  notifications,
  patients,
  plans,
  profiles,
  services,
  servicesCategories,
  specialties,
  specialtyTypes,
  tags,
  toastMessages,
  navs,
  signInRequest
}

export type RootAction = ActionType<typeof rootAction>

export default rootAction
