type LegalDocument = {
    name: string,
    code: string
}

export type Country = {
    name: string,
    code: string,
    hasEID?: boolean,
    documentOptions?: LegalDocument[]
}

