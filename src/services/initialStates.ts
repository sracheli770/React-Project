import {CreditCardType, UserDetailsType } from "../@types/types";

export const initialValuesUserDetails: UserDetailsType = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    houseNumber: "",
    notes: ""
};

export const initialValuesCreditCard: CreditCardType = {
    creditCardNumber: "",
    validity: "",
    cvv: ""
}