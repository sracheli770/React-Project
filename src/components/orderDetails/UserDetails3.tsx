import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
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


const UserDetails3 = ({ theCity }: any) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [notes, setNotes] = useState('')


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="firstName"
                            id="firstName"
                            placeholder="שם פרטי"
                            className="form-control mt-3 mb-2"
                            style={{ backgroundColor: '#fbf8ee' }}
                        />
                        {touched.firstName && errors.firstName &&
                            <div className="text-danger text-end my-1 p-1">
                                {errors.firstName}
                            </div>
                        }

                        <Field name="lastName" id="lastName" placeholder="שם משפחה" className="form-control my-3" style={{ backgroundColor: '#fbf8ee' }} />
                        {touched.lastName && errors.lastName &&
                            <div className="text-danger text-end my-1 p-1">
                                {errors.lastName}</div>
                        }

                        <Field name="city" id="city" placeholder="עיר מגורים" className="form-control my-3" style={{ backgroundColor: '#fbf8ee' }}
                            onChange={(e: any) => {
                                const city = e.currentTarget.value
                                theCity(city)
                            }}
                        />
                        {touched.city && errors.city && <div className="text-danger text-end my-1 p-1">{errors.city}</div>}

                        <Field name="street" it="street" placeholder="רחוב" className="form-control my-3" style={{ backgroundColor: '#fbf8ee' }} />
                        {touched.street && errors.street && <div className="text-danger text-end my-1 p-1">{errors.street}</div>}

                        <Field name="houseNumber" id="houseNumber" placeholder="מספר בית" className="form-control my-3" style={{ backgroundColor: '#fbf8ee' }} />
                        {touched.houseNumber && errors.houseNumber && <div className="text-danger text-end my-1 p-1">{errors.houseNumber}</div>}

                        <Field name="notes" id="notes" placeholder="הערות נוספות לשליח" className="form-control my-3" style={{ backgroundColor: '#fbf8ee' }} />
                        {touched.notes && errors.notes && <div className="text-danger text-end my-1 p-1">{errors.notes}</div>}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default UserDetails3