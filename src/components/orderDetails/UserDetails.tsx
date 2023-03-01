/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { UserDetailsType } from '../../@types/types';

const initialValues: UserDetailsType = {
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


const UserDetails = ({ theCity }: any) => {

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="firstName"
                            id='firstName'
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
                            onKeyUp={(e: any) => {
                                const city = e.currentTarget.value
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

export default UserDetails