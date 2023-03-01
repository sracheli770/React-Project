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
    const cartMenu = menu.filter(m => m.qty > 0)
    const totalPrice = useAppSelector(state=>state.cart.totalPrice)
    const detailsNumber = useAppSelector(state=>state.cart.itemsInCart)

    return (
        <div dir='rtl' className='container text-center'>
            <h2 className='my-3'>סל הקניות שלך</h2>

            <div>
                <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
                    {cartMenu.map(a => (
                        <MenuItem key={a.id} {...a} />
                    ))}
                </div>

                {cartMenu.length < 1 && (
                    <>
                        <h5 className="text-center text-danger mb-3 mt-5">הסל שלך ריק כרגע</h5>
                        <div className='my-3 py-3'></div>
                    </>
                )}


                <div className='card mx-auto w-50 my-4' style={{ backgroundColor: '#fbf8ee' }}>
                    <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                    <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                    <h5>סה"כ לתשלום:  {totalPrice} &#8362; </h5>
                </div>
            </div>



            <button dir='rtl' className="btn btn-outline-success m-3 my-5"
                onClick={() => {
                    navigate('/send-order')
                }} >
                לתשלום
            </button>


            <button dir='rtl' className="btn btn-outline-danger m-3 my-5"
                onClick={() => {
                    Swal.fire({
                        title: 'האם אתה בטוח שברצונך לרוקן את הסל?',
                        showDenyButton: true,
                        confirmButtonText: 'כן',
                        denyButtonText: 'לא',
                        confirmButtonColor: 'green',
                        cancelButtonColor: 'red'
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