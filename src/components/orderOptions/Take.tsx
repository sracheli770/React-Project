import React from 'react'

const Take = () => {
    return (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeTake" >שעת האיסוף:</label >
            <input
                type='time'
                id='timeTake'
                className="form-control w-50 me-0" />
        </div >
    )
}

export default Take