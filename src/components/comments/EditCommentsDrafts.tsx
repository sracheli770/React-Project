import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { addComment } from '../../features/comments/commentsSlice'
import { Comments } from '../../@types/types'

const AddComment = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch()


    const [name, setName] = useState('')
   // const [category, setCategory] = useState('')
    const [comment, setComment] = useState('')


    return (
        <div dir='rtl' className='my-4 text-center mx-auto'>
            <h3>הוספת תגובה</h3>

            <div className='card p-3 mt-4 w-50 mx-auto'>

                <div className='label-input d-flex w-75'>
                    <label htmlFor="name">שם: &nbsp; &nbsp;</label>
                    <input
                        id='name'
                        value={name}
                        onChange={(e) => {
                            setName(e.currentTarget.value)
                        }}
                        placeholder="שם"
                        className="form-control" />
                </div>

                {/* <div className="d-flex my-4">
                    <label htmlFor="category">קטגוריה: &nbsp;</label>
                    <select className='form-select w-25'
                        value={category}
                        name='category'
                        id='category'
                        onChange={(e) => {
                            const cat = e.currentTarget.value;
                            setCategory(cat)
                        }}
                    >
                        <option value="תגובה">תגובה</option>
                        <option value="המלצה">המלצה</option>
                    </select>
                </div> */}

                <div className="label-input d-flex w-75">
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
                    ></textarea>
                </div>
                <br />


                <button className='btn btn-success w-25' onClick={() => {
                    const newComment: Comments = {
                        name: name ?? 'אורח',
                        //category: category,
                        comment: comment,
                        id: v4()
                    };
                    dispatch(addComment(newComment));
                    nav(-1)
                }}>הוספת תגובה</button>
            </div>
        </div>
    )
}

export default AddComment