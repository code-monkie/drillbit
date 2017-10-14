import { Contact } from "./contact"
import { Address } from "./address"

export interface Customer {
    id: number,
    name: string,
    phoneNumber: string,
    Contact: Contact,
    shipToAddress: Address,
    billToAddress: Address,
    creditCardDigits: string,
    creditCardName: string,
    creditCardType: string
}
