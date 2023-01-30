import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../app/hooks'
import CommentItem from './CommentItem'
import { BsChatDots } from 'react-icons/bs'

const Customers = () => {
  const nav = useNavigate()
  const comments = useAppSelector(state => state.comments.comments)

  return (
    <div dir='rtl' className='container mx-auto'>
      <h2 className='my-3'>לקוחות כותבים</h2>
      <p className='text-end w-50 mx-auto'>לקוחות יקרים, זוהי הפינה שלכם =) <br /> מוזמנים לכתוב תגובות עלינו, המלצות על המקום ועל האוכל, <br /> שילובי מנות שאהבתם, וככל העולה על רוחכם. <br />נשמח לשמוע ממכם על מנת שנדע לשמר ולהשתפר.</p>

      <button className="btn btn-outline-dark my-3" onClick={() => { nav(`/comments/add-comment`) }}><BsChatDots />   הוסף תגובה  </button>
      <div className='d-flex flex-wrap justify-content-center mx-auto w-75 mb-5'>
        {comments.map((c) => (
          <CommentItem key={c.id} {...c} />
        ))}
      </div>
    </div>
  )
}

export default Customers