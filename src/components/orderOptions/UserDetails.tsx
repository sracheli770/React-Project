import React, { useState } from 'react'

const UserDetails = ({locationCode}:any) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [notes, setNotes] = useState('')

    return (
        <>
            <div className='label-input my-3 d-flex'>
                <label htmlFor="fName">שם פרטי: &nbsp; &nbsp;</label>
                <input
                    id='fName'
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.currentTarget.value)
                    }}
                    placeholder="שם פרטי"
                    className="form-control" />
            </div>

            <div className='label-input my-3 d-flex'>
                <label htmlFor="lName">שם משפחה: &nbsp; &nbsp;</label>
                <input
                    id='lName'
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.currentTarget.value)
                    }}
                    placeholder="שם משפחה"
                    className="form-control" />
            </div>

            <div className='label-input my-3 d-flex'>
                <label htmlFor="city">עיר: &nbsp; &nbsp;</label>
                <input
                    id='city'
                    value={city}
                    onChange={(e) => {
                        setCity(e.currentTarget.value)
                        locationCode(e.currentTarget.value)
                    }}
                    placeholder="עיר מגורים"
                    className="form-control" />
            </div>

            <div className='label-input my-3 d-flex'>
                <label htmlFor="street">רחוב: &nbsp; &nbsp;</label>
                <input
                    id='street'
                    value={street}
                    onChange={(e) => {
                        setStreet(e.currentTarget.value)
                    }}
                    placeholder="רחוב"
                    className="form-control" />
            </div>

            <div className='label-input my-3 d-flex'>
                <label htmlFor="houseNumber">מס' בית: &nbsp; &nbsp;</label>
                <input
                    id='houseNumber'
                    value={houseNumber}
                    onChange={(e) => {
                        setHouseNumber(e.currentTarget.value)
                    }}
                    placeholder="מספר בית"
                    className="form-control" />
            </div>

            <div className="label-input d-flex my-4">
                <label htmlFor='notes'>הערות: &nbsp; &nbsp;</label>
                <textarea
                    id="notes"
                    className="form-control"
                    aria-label="With textarea"
                    value={notes}
                    onChange={(e) => {
                        setNotes(e.currentTarget.value)
                    }}
                    placeholder="הערות נוספות לשליח"
                ></textarea>
            </div>
        </>
    )
}

export default UserDetails