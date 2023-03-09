import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Swal from 'sweetalert2';
import { clearCart } from '../../features/cartSlice'
import OrderOptions from '../orderDetails/OrderOptions';
import { addShippingPrice, removeShippingPrice } from '../../features/shippingPrice'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialValuesDetails } from '../../services/initialState';
import { validationSchemaDetails } from '../../services/validationSchema';

const SendOrder = () => {
 const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //For the price:
    const { totalPrice } = useAppSelector(state => state.cart)
    const [price, setPrice] = useState(totalPrice);

    const detailsNumber = useAppSelector(state => state.cart.itemsInCart)

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
                setPrice(totalWithoutShipping);
                setPriceShipping(withoutShipping);
                break;

            case 'take':
                dispatch(removeShippingPrice(price));
                setPrice(totalWithoutShipping);
                setPriceShipping(withoutShipping);
                break;

            case 'ship':
                dispatch(addShippingPrice(price));
                setPrice(totalWithShipping);
                setPriceShipping(withShipping);
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


    //For the validation:
    const [formValid, setFormValid] = useState(false);

    const [isCreditCard, setCreditCard] = useState(true)


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
                <OrderOptions theOption={optionHandler} />

                <h5 className='mt-3'>פרטים אישיים:</h5>
                <div>
                    <Formik
                        initialValues={initialValuesDetails}
                        validationSchema={validationSchemaDetails}
                        validate={(values) => {
                            const errors = {};
                            const valid = Object.keys(errors).length === 0;
                            setFormValid(valid);
                            return errors;
                        }}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >
                        {({ handleSubmit }) => (
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
                                        cityHandler(city)
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




                                <h5 className='mt-4'>פרטי תשלום:</h5>

                                <div className="d-flex mt-5 mb-3">
                                    <label htmlFor="paymentOptions">תשלום באמצעות: &nbsp;</label>
                                    <select className='form-select w-25'
                                        name='paymentOptions'
                                        id='paymentOptions'
                                        onChange={(e) => {
                                            const option = e.currentTarget.value;

                                            switch (option) {
                                                case 'creditCard': setCreditCard(true); break;
                                                case 'cash': setCreditCard(false); break;
                                            }
                                        }}
                                        style={{ backgroundColor: '#fbf8ee' }}
                                    >
                                        <option value="creditCard">כרטיס אשראי</option>
                                        <option value="cash">מזומן</option>
                                    </select>
                                </div>

                                {isCreditCard && <>
                                    <div className="d-flex my-4">
                                        <label htmlFor="paymentsNumber">מס' תשלומים: &nbsp;</label>
                                        <select className='form-select w-25'
                                            name='paymentsNumber'
                                            id='paymentsNumber'
                                            style={{ backgroundColor: '#fbf8ee' }}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                                    <Field
                                        name="creditCardNumber"
                                        id='creditCardNumber'
                                        type="text"
                                        placeholder="מספר כרטיס אשראי 1234-1234-1234-1234"
                                        className="form-control mt-3"
                                        style={{ backgroundColor: '#fbf8ee' }}
                                    />
                                    <ErrorMessage
                                        name="creditCardNumber"
                                        component="div"
                                        className="text-danger text-end mt-1 p-1"
                                    />

                                    <Field
                                        name="validity"
                                        id='validity'
                                        type="text"
                                        placeholder="תוקף 10/27"
                                        className="form-control mt-3"
                                        style={{ backgroundColor: '#fbf8ee' }}
                                    />
                                    <ErrorMessage
                                        name="validity"
                                        component="div"
                                        className="text-danger text-end mt-1 p-1"
                                    />

                                    <Field
                                        name="cvv"
                                        id='cvv'
                                        type="text"
                                        placeholder="CVV"
                                        className="form-control mt-3"
                                        style={{ backgroundColor: '#fbf8ee' }}
                                    />
                                    <ErrorMessage
                                        name="cvv"
                                        component="div"
                                        className="text-danger text-end mt-1 p-1"
                                    />
                                </>}

                                <button dir='rtl' className="btn btn-danger w-25 mx-auto mt-4"
                                    type="submit"
                                    disabled={!formValid}
                                    onClick={() => {
                                        if (formValid) {
                                            Swal.fire({
                                                title: 'האם לבצע את ההזמנה?',
                                                showDenyButton: true,
                                                confirmButtonText: 'כן',
                                                denyButtonText: 'לא',
                                                confirmButtonColor: 'green',
                                                cancelButtonColor: 'red'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(clearCart())
                                                    Swal.fire({
                                                        title: "ההזמנה הושלמה בהצלחה",
                                                        icon: "success",
                                                        confirmButtonColor: "green"
                                                    })
                                                    navigate('/')
                                                } else if (result.isDenied) {
                                                    Swal.fire({
                                                        title: "המשך בקניה",
                                                        icon: "info",
                                                        confirmButtonColor: "green"
                                                    })
                                                }
                                            })
                                        }
                                    }}
                                >
                                    שלח הזמנה
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>
        </div>
    )
}

export default SendOrder