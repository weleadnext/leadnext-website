import { defineQuery } from 'next-sanity'

export const CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "cabinetMember"] | order(name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  stateOfOrigin,
  image
}`)
