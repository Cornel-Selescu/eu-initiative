type DateObj = {
    day: number,
    month: number,
    year: number
};

export type SupporterInfo = {
    legalDocument: string,
    initiativeId: string,
    documentId: string,
    firstName: string,
    lastName: string,
    certify: boolean,
    statement: boolean,
    dateOfBirth: DateObj | string
};