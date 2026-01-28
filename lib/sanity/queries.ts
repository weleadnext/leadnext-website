import { defineQuery } from 'next-sanity'

export const TEAM_MEMBERS_QUERY = defineQuery(`*[_type == "teamMember"] | order(order asc) {
  _id,
  name,
  role,
  credentials,
  image,
  bio
}`)

export const CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "cabinetMember"] | order(order asc, name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  stateOfOrigin,
  image
}`)

export const SENATE_CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "senateCabinetMember"] | order(order asc, name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  senatorialZone,
  "stateName": state->name,
  image
}`)

export const HOUSE_CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "houseCabinetMember"] | order(order asc, name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  constituency,
  "stateName": state->name,
  image
}`)

export const SECURITY_HEADS_QUERY = defineQuery(`*[_type == "securityHead"] | order(order asc, agency asc) {
  _id,
  agency,
  position,
  incumbent,
  publicProfileUrl,
  "stateOfOrigin": stateOfOrigin->name,
  image
}`)

export const FEDERAL_MDAS_QUERY = defineQuery(`*[_type == "federalMda"] | order(order asc, agencyName asc) {
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

export const STATE_CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "stateCabinetMember" && state->slug.current == $slug] | order(order asc, name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  image
}`)

export const STATE_ASSEMBLY_CABINET_MEMBERS_QUERY = defineQuery(`*[_type == "stateAssemblyCabinetMember" && state->slug.current == $slug] | order(order asc, name asc) {
  _id,
  name,
  portfolio,
  wikiUrl,
  constituency,
  image
}`)

export const POLITICAL_PARTIES_QUERY = defineQuery(`*[_type == "politicalParty"] | order(order asc, name asc) {
  _id,
  name,
  acronym,
  description,
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

export const FEDERAL_BUDGET_QUERY = defineQuery(`*[_type == "federalBudget"] | order(year desc) {
  _id,
  year,
  title,
  totalAmount,
  status,
  allocations[] {
    sector,
    budgetType,
    allocation,
    percentage,
    notes
  }
}`)
