import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Swal from 'sweetalert2';
import { cart, clearCart } from '../../features/cart/cartSlice'

const Order = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { menu } = useAppSelector(state => state.cart)
    const cartMenu = menu.filter(m => m.inCart)
    let totalPrice = 0
    cartMenu.forEach(m => totalPrice += m.price)
    const detailsNumber = cartMenu.length

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [notes, setNotes] = useState('')
    const [paymentsNumber, setPaymentsNumber] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [validity, setValidity] = useState('')
    const [cvv, setCvv] = useState('')
    const [orderOptions, setOrderOptions] = useState('sit')

    const sit = (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeSit" >שעת ההגעה:</label >
            <input
                id='timeSit'
                placeholder="18:00"
                className="form-control" />
        </div >)

    const [orderOption, setOrderOption] = useState(sit)

    const take = (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeTake" >שעת האיסוף:</label >
            <input
                id='timeTake'
                placeholder="18:00"
                className="form-control" />
        </div >)


    const ship = <div className="d-flex my-3">
        <label htmlFor="timeShip">שעת המשלוח: &nbsp; </label>
        <select className='form-select w-25'
            name='timeShip'
            id='timeShip'
        >
            <option value="17-19">17:00-19:00</option>
            <option value="19-21">19:00-21:00</option>
            <option value="21-23">21:00-23:00</option>
        </select>
    </div>




    return (
        <div dir='rtl' className='text-center mx-auto'>
            <h2 className='m-3'>סיום הזמנה</h2>
            {/* <h5>סיכום פרטי הזמנה:</h5>
            <p>מספר פריטים: {detailsNumber} <br />סה"כ לתשלום:  {totalPrice} &#8362;</p> */}

            <div className='card mx-auto w-50'>
                <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                <h5>סה"כ לתשלום:  {totalPrice} &#8362; </h5>
            </div>

            <div className='card p-3 mt-4 w-50 mx-auto'>
                <h5>פרטים אישיים:</h5>
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

                <div className="d-flex my-5">
                    <label htmlFor="orderOptions">אפשרויות הזמנה: &nbsp;</label>
                    <select className='form-select w-25'
                        value={orderOptions}
                        name='orderOptions'
                        id='orderOptions'
                        onChange={(e) => {
                            const option = e.currentTarget.value;
                            setOrderOptions(option)

                            switch (option) {
                                case 'sit': setOrderOption(sit); break;
                                case 'take': setOrderOption(take); break;
                                case 'ship': setOrderOption(ship); break;
                            }
                        }}
                    >
                        <option value="sit">ישיבה במקום</option>
                        <option value="take">איסוף עצמי</option>
                        <option value="ship">משלוח</option>
                    </select>
                </div>

                {orderOption}



                <h5 className='mt-4'>פרטי תשלום:</h5>

                <div className="d-flex my-4">
                    <label htmlFor="paymentsNumber">מס' תשלומים: &nbsp;</label>
                    <select className='form-select w-25'
                        value={paymentsNumber}
                        name='paymentsNumber'
                        id='paymentsNumber'
                        onChange={(e) => {
                            const num = e.currentTarget.value;
                            setPaymentsNumber(num)
                        }}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>

                <div className='label-input my-3 d-flex'>
                    <label htmlFor="cardNumber">מס' כרטיס: &nbsp; &nbsp;</label>
                    <input
                        id='cardNumber'
                        value={cardNumber}
                        onChange={(e) => {
                            setCardNumber(e.currentTarget.value)
                        }}
                        placeholder="1234 - 1234 - 1234 - 1234"
                        className="form-control" />
                </div>

                <div className='label-input my-3 d-flex w-50'>
                    <label htmlFor="validity">תוקף: &nbsp; &nbsp;</label>
                    <input
                        id='validity'
                        value={validity}
                        onChange={(e) => {
                            setValidity(e.currentTarget.value)
                        }}
                        placeholder="10/25"
                        className="form-control" />
                </div>

                <div className='label-input my-3 d-flex w-50'>
                    <label htmlFor="cvv">CVV: &nbsp; &nbsp;</label>
                    <input
                        id='cvv'
                        value={cvv}
                        onChange={(e) => {
                            setCvv(e.currentTarget.value)
                        }}
                        placeholder="123"
                        className="form-control" />
                </div>



                <button dir='rtl' className="btn btn-danger w-25 mx-auto"
                    onClick={() => {
                        Swal.fire({
                            title: 'האם לבצע את ההזמנה?',
                            showDenyButton: true,
                            confirmButtonText: 'כן',
                            denyButtonText: 'לא',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(clearCart())
                                Swal.fire('ההזמנה הושלמה בהצלחה', '', 'success')
                                navigate('/')
                            } else if (result.isDenied) {
                                Swal.fire('המשך בקניה', '', 'info')
                            }
                        })

                    }}      >
                    שלח הזמנה
                </button>

            </div>
        </div>
    )
}

export default Order