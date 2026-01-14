import { StructureBuilder } from 'sanity/structure'
import { FileText, MapPin, Building2, User, GraduationCap, Inbox, CheckCircle2, Clock, XCircle, Eye, Mail, Briefcase, ShieldAlert, Library, Flag } from 'lucide-react'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Organization Section
      S.listItem()
        .title('Organization')
        .icon(Building2)
        .child(
          S.list()
            .title('Organization')
            .items([
              S.listItem()
                .title('Team Members')
                .icon(User)
                .child(S.documentTypeList('teamMember').title('Team Members')),
            ])
        ),

      S.divider(),

      // Programs & Applications Section
      S.listItem()
        .title('Programs & Applications')
        .icon(GraduationCap)
        .child(
          S.list()
            .title('Programs & Applications')
            .items([
              // Programs List
              S.listItem()
                .title('All Programs')
                .icon(GraduationCap)
                .child(S.documentTypeList('program').title('All Programs')),
              
              S.divider(),
              
              // Applications grouped by Program
              S.listItem()
                .title('Applications by Program')
                .icon(Inbox)
                .child(
                  // Fetch all programs
                  S.documentTypeList('program')
                    .title('Select a Program to View Applications')
                    .child(programId =>
                      // For each program, show its applications grouped by status
                      S.list()
                        .title('Applications')
                        .items([
                          // All Applications
                          S.listItem()
                            .title('All Applications')
                            .icon(Inbox)
                            .child(
                              S.documentList()
                                .title('All Applications')
                                .filter('_type == "application" && program._ref == $programId')
                                .params({ programId })
                                .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                            ),
                          
                          S.divider(),
                          
                          // Pending Applications
                          S.listItem()
                            .title('Pending')
                            .icon(Clock)
                            .child(
                              S.documentList()
                                .title('Pending Applications')
                                .filter('_type == "application" && program._ref == $programId && status == "pending"')
                                .params({ programId })
                                .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                            ),
                          
                          // Under Review Applications
                          S.listItem()
                            .title('Under Review')
                            .icon(Eye)
                            .child(
                              S.documentList()
                                .title('Under Review')
                                .filter('_type == "application" && program._ref == $programId && status == "under_review"')
                                .params({ programId })
                                .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                            ),
                          
                          // Accepted Applications
                          S.listItem()
                            .title('Accepted')
                            .icon(CheckCircle2)
                            .child(
                              S.documentList()
                                .title('Accepted Applications')
                                .filter('_type == "application" && program._ref == $programId && status == "accepted"')
                                .params({ programId })
                                .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                            ),
                          
                          // Rejected Applications
                          S.listItem()
                            .title('Rejected')
                            .icon(XCircle)
                            .child(
                              S.documentList()
                                .title('Rejected Applications')
                                .filter('_type == "application" && program._ref == $programId && status == "rejected"')
                                .params({ programId })
                                .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
                            ),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),

      // Geographic Data Section
      S.listItem()
        .title('Geographic Data')
        .icon(MapPin)
        .child(
          S.list()
            .title('Geographic Data')
            .items([
              S.listItem()
                .title('Zones')
                .icon(MapPin)
                .child(S.documentTypeList('zone').title('Zones')),
              S.listItem()
                .title('States')
                .icon(Building2)
                .child(S.documentTypeList('state').title('States')),
              S.listItem()
                .title('LGAs')
                .icon(Building2)
                .child(S.documentTypeList('lga').title('Local Government Areas')),
            ])
        ),

      S.divider(),

      // Officials & Projects Section
      S.listItem()
        .title('Officials')
        .icon(User)
        .child(S.documentTypeList('official').title('Officials')),
      
      S.listItem()
        .title('Cabinet Members (Federal)')
        .icon(Briefcase)
        .child(S.documentTypeList('cabinetMember').title('Federal Cabinet')),

      S.listItem()
        .title('Cabinet Members (State)')
        .icon(Briefcase)
        .child(S.documentTypeList('stateCabinetMember').title('State Cabinet')),
      
      S.listItem()
        .title('Security Heads')
        .icon(ShieldAlert)
        .child(S.documentTypeList('securityHead').title('Security Heads')),
      
      S.listItem()
        .title('Federal MDAs')
        .icon(Library)
        .child(S.documentTypeList('federalMda').title('Federal MDAs')),
      
      S.listItem()
        .title('Projects')
        .icon(FileText)
        .child(S.documentTypeList('project').title('Projects')),
      
      S.listItem()
        .title('Political Parties')
        .icon(Flag)
        .child(S.documentTypeList('politicalParty').title('Political Parties')),

      S.divider(),

      // Mailing List Subscriptions
      S.listItem()
        .title('Mailing List')
        .icon(Mail)
        .child(
          S.documentList()
            .title('Mailing List Subscriptions')
            .filter('_type == "mailingListSubscription"')
            .defaultOrdering([{ field: 'subscribedAt', direction: 'desc' }])
        ),
    ])

