export type InitiativeInfo = {
    initiativeLogo: string,
    objectives: string[],
    commissionWebpage: string,
    initiativeWebsite?: string,
    contactRep?: {
        name: string,
        email: string
    },
    contactSub?: {
      name: string,
      email: string
    },
    registrationNumber: string,
    registrationDate: string
};