import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Comments } from '../../@types/types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { editComment } from '../../features/comments/commentsSlice'

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
        <div dir='rtl' className='my-4 text-center mx-auto'>
            <h3 className='my-4'>עריכת תגובה</h3>

            <div className='card p-3 w-50 mx-auto my-5' style={{ backgroundColor: '#fbf8ee' }}>

                <div className='label-input my-4 d-flex w-75'>
                    <label htmlFor="name">שם: &nbsp; &nbsp;</label>
                    <input
                        id='name'
                        value={name}
                        onChange={(e) => {
                            const name=e.currentTarget.value
                            setName(name)
                            if(name.length<1){
                                setName('אנונימי')
                            }
                        }}
                        placeholder="שם"
                        className="form-control"
                        style={{ backgroundColor: '#fbf8ee' }} />
                </div>

                <div className="label-input my-4 d-flex w-75">
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

                <button className='btn btn-success w-25 mx-auto mt-3 mb-5' onClick={() => {
                    if (comment.length < 4) { setNote(<p className='text-end text-danger'>תגובתך צריכה להכיל לפחות 4 תווים</p>); return }

                    const editedComment: Comments = {
                        name: name,
                        comment: comment,
                        id: commentToEdit.id
                    };
                    dispatch(editComment(editedComment));
                    nav(-1)
                }}>סיום עריכה</button>
            </div>
        </div>
    )
}

export default EditComment