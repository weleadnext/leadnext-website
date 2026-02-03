import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  status,
  mainImage,
  "officialName": official->name,
  "officialRole": official->role,
  "stateName": state->name
}`

export const PROGRAMS_QUERY = groq`*[_type == "program"] | order(order asc, _createdAt asc) {
  _id,
  title,
  slug,
  description,
  mainImage,
  applicationsOpen,
  order
}`

export const PROGRAM_BY_SLUG_QUERY = groq`*[_type == "program" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  mainImage,
  overview,
  whatItOffers,
  programStructure,
  eligibilityCriteria,
  applyText,
  applicationsOpen,
  order
}`

export const COHORTS_QUERY = groq`*[_type == "cohort"] | order(status desc, startDate desc) {
  _id,
  name,
  status,
  startDate,
  endDate,
  programStartDate,
  description
}`

export const ACTIVE_COHORT_QUERY = groq`*[_type == "cohort" && status == "active"][0] {
  _id,
  name,
  status,
  startDate,
  endDate,
  programStartDate,
  description
}`

export const OFFICIALS_QUERY = groq`*[_type == "official"] | order(name asc) {
  _id,
  name,
  role,
  photo,
  level,
  "stateName": state->name
}`
