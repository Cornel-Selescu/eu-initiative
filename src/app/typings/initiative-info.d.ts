import { InitiativeDetails } from 'src/app/typings/initiative-details';
import { SignitureInfo } from 'src/app/typings/signature-info';
import { Signator } from 'src/app/typings/signator';
import { ThresholdCountry } from 'src/app/typings/threshold-country';


export type InitiativeInfo = {
    id: string | number,
    title: string,
    details: InitiativeDetails,
    signaturesInfo: SignitureInfo,
    recentSignatories: Signator[],
    thresholdCountries: ThresholdCountry[]
}