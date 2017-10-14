import { Contact } from "./contact";
import { Customer } from "./customer";

export interface QuoteSummary {
    quoteNumber: string,
    accountManager: string,
    salesRepresentative: string,
    customer: Customer,
    status: string,
    age: number,
    state: string,
    contact: Contact
}