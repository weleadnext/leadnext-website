import { defineQuery } from 'next-sanity'

export const CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "cabinetMember"] | order(name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  stateOfOrigin,
  image
}`)

export const SECURITY_HEADS_QUERY = defineQuery(`*[_type == "securityHead"] | order(agency asc) {
  _id,
  agency,
  position,
  incumbent,
  publicProfileUrl,
  stateOfOrigin,
  image
}`)

export const FEDERAL_MDAS_QUERY = defineQuery(`*[_type == "federalMda"] | order(agencyName asc) {
  _id,
  sector,
  supervisingMinistry,
  agencyName,
  acronym,
  headName,
  headTitle,
  stateOfOrigin,
  sourceUrl,
  logo
}`)

export const STATES_QUERY = defineQuery(`*[_type == "state"] | order(name asc) {
  _id,
  name,
  slug,
  logo,
  zone->{name}
}`)

export const STATE_DETAIL_QUERY = defineQuery(`*[_type == "state" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  logo,
  zone->{name}
}`)

export const STATE_CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "stateCabinetMember" && state->slug.current == $slug] | order(name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  image
}`)

export const POLITICAL_PARTIES_QUERY = defineQuery(`*[_type == "politicalParty"] | order(name asc) {
  _id,
  name,
  acronym,
  image
}`)

export const LGAS_QUERY = defineQuery(`*[_type == "lga"] | order(name asc) {
  _id,
  name,
  slug,
  zone,
  chairman->{name, photo},
  logo,
  state->{name, slug}
}`)

export const LGA_DETAIL_QUERY = defineQuery(`*[_type == "lga" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  zone,
  chairman->{name, photo, role, bio},
  logo,
  description,
  state->{name, slug, logo}
}`)
