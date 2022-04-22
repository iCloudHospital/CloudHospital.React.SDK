import auths from './auths'
import accounts from './accounts'
import externalLogins from './externalLogins'
import accreditations from './accreditations'
import articles from './articles'
import articleContributors from './articleContributors'
import articleMedias from './articleMedias'
import articleSources from './articleSources'
import bookings from './bookings'
import chats from './chats'
import communications from './communications'
import consultations from './consultations'
import contributors from './contributors'
import countries from './countries'
import deals from './deals'
import doctors from './doctors'
import doctorCertificates from './doctorCertificates'
import doctorEducations from './doctorEducations'
import doctorMedias from './doctorMedias'
import doctorPortfolios from './doctorPortfolios'
import doctorSpecialties from './doctorSpecialties'
import faqCategories from './faqCategories'
import faqs from './faqs'
import hospitals from './hospitals'
import hospitalAccreditations from './hospitalAccreditations'
import hospitalEquipments from './hospitalEquipments'
import hospitalSpecialties from './hospitalSpecialties'
import hospitalServices from './hospitalServices'
import images from './images'
import languages from './languages'
import memberships from './memberships'
import notifications from './notifications'
import patients from './patients'
import plans from './plans'
import profiles from './profiles'
import services from './services'
import servicesCategories from './servicesCategories'
import specialties from './specialties'
import specialtyTypes from './specialtyTypes'
import tags from './tags'
import azSearch from './search'
import serviceReviews from './serviceReviews'
import groupChannels from './groupChannels'

const rootServices = {
  apis: {
    auths,
    accounts,
    externalLogins,
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
    faqCategories,
    faqs,
    groupChannels,
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
    azSearch,
    serviceReviews
  }
}

export type Services = typeof rootServices

export default rootServices

export * from './HttpClient'
