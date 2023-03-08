import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Comments } from '../../@types/types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { editComment } from '../../features/commentsSlice'

const EditComment = () => {
    const { id } = useParams()
    const nav = useNavigate()
    const dispatch = useAppDispatch()
    const comments = useAppSelector(state => state.comments.comments)

    const commentToEdit = comments.find(c => c.id === id)

    const [name, setName] = useState(commentToEdit?.name ?? 'אנונימי')
    const [comment, setComment] = useState(commentToEdit?.comment ?? '')
    const [note, setNote] = useState(<></>)

    if (commentToEdit === undefined) {
        return <Navigate to="/404" />
    }

    return (
        <>
            <div dir='rtl' className='my-4 text-center mx-auto'>
                <h2 className='my-3'>עריכת תגובה</h2>

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
                        if (comment.length < 4) { setNote(<p className='text-end text-danger'>תגובתך צריכה להכיל לפחות 4 תווים</p>); }
                        else if (comment.length > 255) {
                            setNote(<p className='text-end text-danger'>תגובתך יכולה להכיל עד 255 תווים</p>);
                        }

                        else {
                            const editedComment: Comments = {
                                name: name,
                                comment: comment,
                                id: commentToEdit.id
                            };
                            dispatch(editComment(editedComment));
                            nav(-1)
                        }
                    }}>סיום עריכה</button>
                </div>
            </div>
            <div className='my-5 p-1'> </div>
        </>
    )
}

export default EditComment