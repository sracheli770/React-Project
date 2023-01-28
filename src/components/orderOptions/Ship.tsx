import React from 'react'

const Ship = () => {
    return (
        <div className="d-flex my-3">
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
    )
}

export default Ship