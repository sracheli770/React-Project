import React from 'react'

const Ship = () => {
    return (
        <>
            <div className="d-flex my-3">
                <label htmlFor="timeShip">שעת המשלוח: &nbsp; </label>
                <select className='form-select w-25'
                    name='timeShip'
                    id='timeShip'
                    style={{ backgroundColor: '#fbf8ee' }}
                >
                    <option value="17-19">17:00-19:00</option>
                    <option value="19-21">19:00-21:00</option>
                    <option value="21-23">21:00-23:00</option>
                </select>
            </div>
            <p className='text-end text-danger'>תזכורת: הזמנות יתקבלו עד השעה 20:30. הזמנות שיתקבלו לאחר מכן, יישלחו ביום העסקים הבא</p>
        </>
    )
}

export default Ship