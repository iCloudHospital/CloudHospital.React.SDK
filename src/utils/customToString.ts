export const slugToString = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join(' ')
}
export const slugToStringWithHyphen = (slug: string) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1, word.length))
    .join('-')
}
