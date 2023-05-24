export const REGEX_NAME_EN = /^[a-zA-Z]{1,20}\s[a-zA-Z]{1,20}$/
export const REGEX_NAME_KO = /^[가-힣]{1,20}$/
export const REGEX_NAME_RU = /^[а-я]{1,20}$/
export const REGEX_NUMBERS = /\d/
export const REGEX_SPECIAL_CHARACTERS = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
export const REGEX_SPECIAL_CHARACTERS_G = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/gim
export const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/

export const REGEX_URL_EXTERNAL = new RegExp(
  '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
)

export const REGEX_URL_EXTERNAL_HTTPS = /http[s]*:\/\/[\w.-]*[\w.-]*\.[\w.-].[\w]|[^%]|%[0-9A-Fa-f]{2}/gm
// export const REGEX_URL_EXTERNAL_HTTPS = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm

export const REGEX_VALID_DYNAMIC_ROUTES = /\/[a-z]+\/([0-9A-Za-z-.@:%_+~#=])+[^\/]/
// export const REGEX_VALID_DYNAMIC_ROUTES = new RegExp('[a-z]+/([0-9A-Za-z-\\.@:%_+~#=])+')
