import React from 'react'

const Take = () => {
    return (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeTake" >שעת האיסוף:</label >
            <input
                id='timeTake'
                placeholder="18:00"
                className="form-control" />
        </div >
    )
}

export default Take