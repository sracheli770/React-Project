import React from 'react'

const Sit = () => {
    return (
        <div className='label-input my-3 d-flex w-50'>
            <label className='w-50' htmlFor="timeSit" >שעת ההגעה:</label >
            <input
                id='timeSit'
                placeholder="18:00"
                className="form-control" />
        </div >
    )
}

export default Sit