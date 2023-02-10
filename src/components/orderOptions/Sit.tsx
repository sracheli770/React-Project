import React from 'react'

const Sit = () => {
    return (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeSit" >שעת ההגעה:</label >
            <input
                type="time"
                id="timeSit"
                className="form-control w-50 me-0" />
        </div >
    )
}

export default Sit