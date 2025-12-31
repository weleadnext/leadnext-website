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

export const PROGRAMS_QUERY = groq`*[_type == "program"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  description,
  mainImage
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
  applyText
}`

export const OFFICIALS_QUERY = groq`*[_type == "official"] | order(name asc) {
  _id,
  name,
  role,
  photo,
  level,
  "stateName": state->name
}`
