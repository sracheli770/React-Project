import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { addComment } from '../../features/comments/commentsSlice'
import { Comments } from '../../@types/types'

const AddComment = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()


    const [name, setName] = useState('אנונימי')
    const [comment, setComment] = useState('')
    const [note, setNote] = useState(<></>)


    return (
        <>
            <div dir='rtl' className='my-4 text-center mx-auto'>
                <h2 className='my-3'>הוספת תגובה</h2>

                <div className='my-5'> </div>

                <div className='card p-3 w-50 mx-auto my-4' style={{ backgroundColor: '#fbf8ee' }}>

                    <div className='label-input my-3 d-flex w-75'>
                        <label htmlFor="name">שם: &nbsp; &nbsp;</label>
                        <input
                            id='name'
                            value={name}
                            onChange={(e) => {
                                const name = e.currentTarget.value
                                setName(name)
                                if (name.length < 1) {
                                    setName('אנונימי')
                                }
                            }}
                            placeholder="שם"
                            className="form-control"
                            style={{ backgroundColor: '#fbf8ee' }} />
                    </div>

                    <div className="label-input my-3 d-flex w-75">
                        <label htmlFor='comment'>תגובה: &nbsp; &nbsp;</label>
                        <textarea
                            id="comment"
                            className="form-control"
                            aria-label="With textarea"
                            value={comment}
                            onChange={(e) => {
                                setComment(e.currentTarget.value)
                            }}
                            placeholder="הוסף תגובה"
                            style={{ backgroundColor: '#fbf8ee' }}
                        ></textarea>
                    </div>
                    <br />

                    {note}

                    <button className='btn btn-success w-25 mx-auto mt-2 mb-5' onClick={() => {
                        if (comment.length < 4) { setNote(<p className='text-end text-danger'>תגובתך צריכה להכיל לפחות 4 תווים</p>); return }

                        const newComment: Comments = {
                            name: name,
                            comment: comment,
                            id: v4()
                        };
                        dispatch(addComment(newComment));
                        nav(-1)
                    }}>הוספת תגובה</button>
                </div>
            </div>
            <div className='my-5 p-1'> </div>
        </>
    )
}

export default AddComment