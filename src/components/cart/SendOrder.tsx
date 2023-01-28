import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Swal from 'sweetalert2';
import { cart, clearCart } from '../../features/cart/cartSlice'
import PaymentsOptions from '../orderOptions/PaymentsOptions';
import OrderOptions from '../orderOptions/OrderOptions';
import UserDetails from '../orderOptions/UserDetails';

const Order = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { menu } = useAppSelector(state => state.cart)
    const cartMenu = menu.filter(m => m.inCart)
    let totalPrice = 0
    cartMenu.forEach(m => totalPrice += m.price)
    const detailsNumber = cartMenu.length

    return (
        <div dir='rtl' className='text-center mx-auto'>
            <h2 className='m-3'>סיום הזמנה</h2>

            <div className='card mx-auto w-50'>
                <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                <h5>סה"כ לתשלום:  {totalPrice} &#8362; </h5>
            </div>

            <div className='card p-3 mt-4 w-50 mx-auto'>
                <h5>פרטים אישיים:</h5>

                <UserDetails />
                <OrderOptions />

                <h5 className='mt-4'>פרטי תשלום:</h5>
                <PaymentsOptions />


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