import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Swal from 'sweetalert2';
import { clearCart } from '../../features/cart/cartSlice'
import PaymentsOptions from '../orderDetails/PaymentsOptions';
import OrderOptions from '../orderDetails/OrderOptions';
import UserDetails from '../orderDetails/UserDetails';
import { addShippingPrice, removeShippingPrice } from '../../features/shippingPrice/shippingPrice'
import UserDetails2 from '../orderDetails/UserDetails2';
import UserDetails3 from '../orderDetails/UserDetails3';

const Order = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { totalPrice } = useAppSelector(state => state.cart)
    const [price, setPrice] = useState(totalPrice);

    const { menu } = useAppSelector(state => state.cart);
    const cartMenu = menu.filter(m => m.inCart)
    const detailsNumber = cartMenu.length

    const shippingCost = 35
    const totalWithShipping = totalPrice + shippingCost
    const totalWithoutShipping = totalPrice


    const withShipping = (
        <>
            <h6 className='mb-3'>סה"כ: {totalPrice} &#8362;</h6>
            <h6 className='mb-3'>דמי משלוח: 35 &#8362;</h6>
        </>
    )

    const freeShipping = (
        <>
            <h6 className='mb-3'>סה"כ: {totalPrice} &#8362;</h6>
            <h6 className='mb-3'>דמי משלוח: 0 &#8362;</h6>
        </>
    )

    const withoutShipping = (<></>)


    const [priceShipping, setPriceShipping] = useState(withoutShipping)

    const optionHandler = (option: string) => {
        switch (option) {
            case 'sit':
                dispatch(removeShippingPrice(price));
                setPrice(totalWithoutShipping)
                break;

            case 'take':
                dispatch(removeShippingPrice(price));
                setPrice(totalWithoutShipping)
                break;

            case 'ship':
                dispatch(addShippingPrice(price));
                setPrice(totalWithShipping)
                over200()
                break;
        }
    }

    const cityHandler = (city: string) => {
        if (city === 'תל אביב' || city === 'תל-אביב' || city === 'ת"א' || city === 'תא') {
            setPrice(totalWithoutShipping)
            setPriceShipping(freeShipping)
        }
        else {
            setPrice(totalWithShipping)
            setPriceShipping(withShipping)
        }
    }

    const over200 = () => {
        if (totalPrice >= 200) {
            setPrice(totalWithoutShipping)
            setPriceShipping(freeShipping)
        }
        else {
            setPrice(totalWithShipping)
            setPriceShipping(withShipping)
        }
    }


    return (
        <div dir='rtl' className='text-center mx-auto'>
            <h2 className='m-3'>סיום הזמנה</h2>

            <div className='card mx-auto w-50' style={{ backgroundColor: '#fbf8ee' }}>
                <h4 className='my-3'>סיכום פרטי הזמנה</h4>
                <h6 className='mb-3'>מספר הפריטים בסל: {detailsNumber}</h6>
                {priceShipping}
                <h5>סה"כ לתשלום:  {price} &#8362; </h5>
            </div>

            <div className='card p-3 mt-4 w-50 mx-auto' style={{ backgroundColor: '#fbf8ee' }}>
                <h5>פרטים אישיים:</h5>
                <UserDetails2 theCity={cityHandler} />
                <OrderOptions theOption={optionHandler} />


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