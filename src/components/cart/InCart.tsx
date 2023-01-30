import MenuItem from '../menu/MenuItem';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearCart } from '../../features/cart/cartSlice'
import Swal from 'sweetalert2';
import { BsTrash } from "react-icons/bs";

const InCart = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { menu } = useAppSelector(state => state.cart)
    const cartMenu = menu.filter(m => m.inCart)
    let totalPrice = 0
    cartMenu.forEach(m => totalPrice += m.price)
    const detailsNumber = cartMenu.length


    return (
        <div dir='rtl' className='container text-center'>
            <h2 className='my-3'>סל הקניות שלך</h2>

            <div className="">
                <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
                    {cartMenu.map(a => (
                        <MenuItem key={a.id} {...a} />
                    ))}
                </div>

                {cartMenu.length < 1 && <h5 className="text-center text-danger my-3">הסל שלך ריק כרגע</h5>}

                <div className='card mx-auto w-50 my-3'>
                    <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                    <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                    <h5>סה"כ לתשלום:  {totalPrice} &#8362; </h5>
                </div>
            </div>


            <button className="btn btn-light m-3" onClick={() => { navigate(-1); }}>חזרה</button>

            <button dir='rtl' className="btn btn-success m-3"
                onClick={() => {
                    navigate('/send-order')
                }} >
                לתשלום
            </button>


            <button dir='rtl' className="btn btn-danger m-3"
                onClick={() => {
                    Swal.fire({
                        title: 'האם אתה בטוח שברצונך לרוקן את הסל?',
                        showDenyButton: true,
                        confirmButtonText: 'כן',
                        denyButtonText: 'לא',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            dispatch(clearCart())
                            Swal.fire('הסל התרוקן בהצלחה', '', 'success')
                        } else if (result.isDenied) {
                            Swal.fire('המשך בקניה', '', 'info')
                        }
                    })

                }}      >
                <BsTrash /> רוקן סל
            </button>


        </div>
    )
}

export default InCart