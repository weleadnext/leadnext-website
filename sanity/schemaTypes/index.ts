import { type SchemaTypeDefinition } from 'sanity'
import { zone } from './zone'
import { state } from './state'
import { lga } from './lga'
import { official } from './official'
import { project } from './project'
import { program } from './program'
import { application } from './application'
import { mailingListSubscription } from './mailingListSubscription'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [zone, state, lga, official, project, program, application, mailingListSubscription],
}
