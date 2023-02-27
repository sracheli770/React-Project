import React, { useState } from 'react'
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { UserDetails } from '../../@types/types';

const initialValues: UserDetails = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    houseNumber: "",
    notes: ""
};

//Validations:
const validationSchema = yup.object().shape({
    firstName: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    lastName: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    city: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    street: yup.string().min(3, "שדה זה צריך להכיל לפחות 3 תווים").required("זהו שדה חובה"),
    houseNumber: yup.string().required("זהו שדה חובה"),
    notes: yup.string()
});


const UserDetails2 = ({ theCity }: any) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [notes, setNotes] = useState('')

    //if all is valid=> this method is invoked
    const handleDetails = (formValues: UserDetails) => {
        const { firstName, lastName, city, street, houseNumber, notes } = formValues;

        setFirstName(firstName);
        setLastName(lastName);
        setCity(city);
        setStreet(street);
        setHouseNumber(houseNumber);
        setNotes(notes ?? "");
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="firstName"
                            id='firstName'
                            /* value={firstName}
                            onChange={(e: any) => {
                                setFirstName(e.currentTarget.value)
                            }} */
                            type="text"
                            placeholder="שם פרטי"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <Field
                            name="lastName"
                            id='lastName'
                            /* value={lastName}
                            onChange={(e: any) => {
                                setLastName(e.currentTarget.value)
                            }} */
                            type="text"
                            placeholder="שם משפחה"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <Field
                            name="city"
                            id='city'
                            value={city}
                            onChange={(e: any) => {
                                const city = e.currentTarget.value
                                setCity(city)
                                theCity(city)
                            }}
                            type="text"
                            placeholder="עיר מגורים"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        <ErrorMessage
                            name="city"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <Field
                            name="street"
                            id='street'
                            /*  value={street}
                             onChange={(e: any) => {
                                 setStreet(e.currentTarget.value)
                             }} */
                            type="text"
                            placeholder="רחוב"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        <ErrorMessage
                            name="street"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <Field
                            name="houseNumber"
                            id='houseNumber'
                            /* value={houseNumber}
                            onChange={(e: any) => {
                                setHouseNumber(e.currentTarget.value)
                            }} */
                            type="number"
                            placeholder="מספר בית"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        <ErrorMessage
                            name="houseNumber"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <textarea
                            name="notes"
                            id='notes'
                            /* value={notes}
                            onChange={(e: any) => {
                                setNotes(e.currentTarget.value)
                            }} */
                            aria-label="With textarea"
                            placeholder="הערות נוספות לשליח"
                            className="form-control mt-3"
                            style={{ backgroundColor: '#fbf8ee' }} />
                        <ErrorMessage
                            name="notes"
                            component="div"
                            className="text-danger text-end mt-1 p-1"
                        />

                        <button
                            className="btn btn-danger w-25 mx-auto mt-3"
                            type="submit"
                        >
                            שלח הזמנה
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UserDetails2