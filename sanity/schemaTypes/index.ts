import { type SchemaTypeDefinition } from 'sanity'
import { zone } from './zone'
import { state } from './state'
import { lga } from './lga'
import { official } from './official'
import { project } from './project'
import { program } from './program'
import { application } from './application'
import { mailingListSubscription } from './mailingListSubscription'
import cabinetMember from '../schemas/cabinet-member'
import securityHead from '../schemas/security-head'
import federalMda from '../schemas/federal-mda'
import stateCabinetMember from '../schemas/state-cabinet-member'
import politicalParty from '../schemas/political-party'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [zone, state, lga, official, project, program, application, mailingListSubscription, cabinetMember, securityHead, federalMda, stateCabinetMember, politicalParty],
}
