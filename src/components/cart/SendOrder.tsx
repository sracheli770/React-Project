import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Swal from 'sweetalert2';
import { clearCart } from '../../features/cart/cartSlice'
import PaymentsOptions from '../orderOptions/PaymentsOptions';
import OrderOptions from '../orderOptions/OrderOptions';
import UserDetails from '../orderOptions/UserDetails';
import Sit from '../orderOptions/Sit';
import Take from '../orderOptions/Take';
import Ship from '../orderOptions/Ship';
import { addShippingPrice, removeShippingPrice } from '../../features/shippingPrice'

const Order = () => {
    const { shippingPrice } = useAppSelector(state => state.shippingPrice)
    const { totalPrice } = useAppSelector(state => state.cart)

    const [price, setPrice] = useState(totalPrice);

    useEffect(() => {
        console.log(price)
    }, [price, shippingPrice])


    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [orderOptions, setOrderOptions] = useState('sit')
    const [orderOption, setOrderOption] = useState(Sit)

    const { menu } = useAppSelector(state => state.cart);
    const cartMenu = menu.filter(m => m.inCart)
    //let totalPrice = shippingPrice ;


    // let sum = 0;
    // cartMenu.forEach(m => sum += m.price);


    const detailsNumber = cartMenu.length

    const shippingCost = 35

    const withShipping = totalPrice + shippingCost

    const withoutShipping = totalPrice


    // let totalWithShipping = price+35

    /* const withShipping = (
        <>
            <h6 className='mb-3'>סה"כ: {totalPrice} &#8362;</h6>
            <h6 className='mb-3'>דמי משלוח: 35 &#8362;</h6>
            <h5>סה"כ לתשלום:  {price} &#8362; </h5>
        </>
    )

    const freeShipping = (
        <>
            <h6 className='mb-3'>סה"כ: {totalPrice} &#8362;</h6>
            <h6 className='mb-3'>דמי משלוח: 0 &#8362;</h6>
            <h5>סה"כ לתשלום:  {totalPrice} &#8362; </h5>
        </>
    )

    const withoutShipping = (
        <h5>סה"כ לתשלום:  {price} &#8362; </h5>
    ) 

    const [priceShipping, setPriceShipping] = useState(withoutShipping)*/


    /*  if (totalPrice > 200) {
        //totalWithShipping = totalPrice;
        setPriceShipping(freeShipping)
    } */

    //להוסיף תנאי שאם העיר תל אביב- אז גם לשנות setPriceShipping(freeShipping)

    const locationCodeHandler = (code: any) => {
        if (code == 'תל אביב' || code == 'תל-אביב' || code == 'ת"א' || code == 'תא') {
            setPrice(withoutShipping)
        } else {
            setPrice(withShipping)
        }

    }

    const over200 = () => {
        if (totalPrice >= 200) {
            setPrice(withoutShipping)
        } else {
            setPrice(withShipping)
        }
    }

    return (
        <div dir='rtl' className='text-center mx-auto'>
            <h2 className='m-3'>סיום הזמנה</h2>

            <div className='card mx-auto w-50'>
                <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                {/*  {priceShipping} */}
                <h6 className='mb-3'>סה"כ: {totalPrice} &#8362;</h6>
                <h6 className='mb-3'>דמי משלוח: 35 &#8362;</h6>
                <h5>סה"כ לתשלום:  {price} &#8362; </h5>
            </div>

            <div className='card p-3 mt-4 w-50 mx-auto'>
                <h5>פרטים אישיים:</h5>

                <UserDetails locationCode={locationCodeHandler} />



                <div className="d-flex mt-5 mb-3">
                    <label htmlFor="orderOptions">אפשרויות הזמנה: &nbsp;</label>
                    <select className='form-select w-25'
                        value={orderOptions}
                        name='orderOptions'
                        id='orderOptions'
                        onChange={(e) => {
                            const option = e.currentTarget.value;
                            setOrderOptions(option)

                            switch (option) {
                                case 'sit':
                                    setOrderOption(Sit);
                                    // setPriceShipping(withoutShipping);
                                    dispatch(removeShippingPrice(price));
                                    setPrice(withoutShipping)
                                    break;

                                case 'take':
                                    setOrderOption(Take);
                                    //setPriceShipping(withoutShipping);
                                    dispatch(removeShippingPrice(price));
                                    setPrice(withoutShipping)
                                    break;

                                case 'ship':
                                    setOrderOption(Ship);
                                    // setPrice(totalWithShipping);
                                    // setPriceShipping(withShipping);
                                    dispatch(addShippingPrice(price));
                                    setPrice(withShipping)
                                    over200()
                                    break;
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