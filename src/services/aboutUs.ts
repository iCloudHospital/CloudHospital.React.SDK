import { configuration, instance } from './HttpClient'
import { AboutUsApi, AboutUsPageModel, AboutUsPagesModel } from 'ch-api-client-typescript2/lib'
import { AboutUsPageSearchOption, AboutUsPagesSearchOption } from '../models/aboutUs'
import { RestException } from '../models'

const apiRoot = HttpClient.getBaseUrl()

export function loadAboutUsPages(aboutUsPagesSearchOption: AboutUsPagesSearchOption): Promise<AboutUsPagesModel> {
  const {
    hospitalId,
    hospitalName,
    hospitalSlug,
    overviewTitle,
    normalizedOverviewTitle,
    overview,
    content,
    customStyle,
    background,
    backgroundThumbnail,
    languageCode,
    returnDefaultValue,
    confirmed,
    page,
    limit,
    lastRetrieved
  } = aboutUsPagesSearchOption
  return new AboutUsApi(configuration, apiRoot, instance)
    .apiV2AboutusGet(
      hospitalId,
      hospitalName,
      hospitalSlug,
      overviewTitle,
      normalizedOverviewTitle,
      overview,
      content,
      customStyle,
      background,
      backgroundThumbnail,
      languageCode,
      returnDefaultValue,
      confirmed,
      page,
      limit,
      lastRetrieved
    )
    .then((res) => {
      return res.data as AboutUsPagesModel
    })
    .catch((error: any) => {
      const restException = error.response.data as RestException
      throw restException
    })
}

export function loadAboutUsPage(aboutUsPageSearchOption: AboutUsPageSearchOption): Promise<AboutUsPageModel> {
  const { hospitalId, languageCode, returnDefaultValue, slug } = aboutUsPageSearchOption
  if (slug) {
    return new AboutUsApi(configuration, apiRoot, instance)
      .apiV2AboutusSlugGet(slug, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as AboutUsPageModel
      })
      .catch((error) => {
        const restException = error.response.data as RestException
        throw restException
      })
  } else {
    return new AboutUsApi(configuration, apiRoot, instance)
      .apiV2AboutusHospitalIdGet(hospitalId, languageCode, returnDefaultValue)
      .then((res) => {
        return res.data as AboutUsPageModel
      })
      .catch((error: any) => {
        const restException = error.response.data as RestException
        throw restException
      })
  }
}

export default {
  loadAboutUsPages,
  loadAboutUsPage
}
