import { configuration, instance } from './HttpClient'
import { AboutUsApi, AboutUsPagesModel } from 'ch-api-client-typescript2/lib'
import { AboutUsSearchOption } from '../models/aboutUs'
import { RestException } from '../models'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

export function loadAboutUs(aboutUsSearchOption: AboutUsSearchOption): Promise<AboutUsPagesModel> {
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
  } = aboutUsSearchOption

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

export default {
  loadAboutUs
}
