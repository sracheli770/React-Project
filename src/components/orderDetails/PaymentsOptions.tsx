import React, { useState } from 'react'

const PaymentsOptions = () => {
   const [paymentsNumber, setPaymentsNumber] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [validity, setValidity] = useState('')
    const [cvv, setCvv] = useState('')
    const [paymentOptions, setPaymentOptions] = useState('creditCard')


    const cash = <></>

    const creditCard = <>
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
                style={{ backgroundColor: '#fbf8ee' }}
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
                className="form-control"
                style={{ backgroundColor: '#fbf8ee' }} />
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
                className="form-control"
                style={{ backgroundColor: '#fbf8ee' }} />
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
                className="form-control" 
                style={{ backgroundColor: '#fbf8ee' }}/>
        </div>
    </>

    const [paymentOption, setPaymentOption] = useState(creditCard)



    
  return (
    <>
          <div className="d-flex mt-5 mb-3">
              <label htmlFor="paymentOptions">תשלום באמצעות: &nbsp;</label>
              <select className='form-select w-25'
                  value={paymentOptions}
                  name='paymentOptions'
                  id='paymentOptions'
                  onChange={(e) => {
                      const option = e.currentTarget.value;
                      setPaymentOptions(option)

                      switch (option) {
                          case 'creditCard': setPaymentOption(creditCard); break;
                          case 'cash': setPaymentOption(cash); break;
                      }
                  }}
                  style={{ backgroundColor: '#fbf8ee' }}
              >
                  <option value="creditCard">כרטיס אשראי</option>
                  <option value="cash">מזומן</option>
              </select>
          </div>


          {paymentOption}
    </>
  )
}

export default PaymentsOptions