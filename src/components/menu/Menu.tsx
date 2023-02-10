import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import MenuItem from './MenuItem'
import { useNavigate, useParams } from 'react-router-dom'
import { homeMenu } from '../../services/mainMenu'
import css from './Menu.module.scss'



const Menu = () => {
  const { menu } = useParams();
  const mainMenu = useAppSelector(state => state.cart.menu);
  let theMenu = mainMenu.filter((m) => m.category === menu);
  const navigate = useNavigate()
  const category = homeMenu.find(c => c.category === menu)!
  const nameOfCategory = category.name

  const [menuu, setMenu] = useState(theMenu)
  const glutenFree2 = theMenu.filter(m => m.glutenFree)
  const vegetarian = theMenu.filter(m => m.vegetarian)
  const glutandvaga = theMenu.filter(m => m.glutenFree && m.vegetarian)


  //לחפש משפט תנאי מתאים ומיקום מתאים, כרגע עובד
  /* if (!theMenu) {
    return <Navigate to='/404' />
  } */

  return (
    <div dir='rtl' className='container text-center'>
      <h2 className='my-3'>תפריט {nameOfCategory}</h2>


      <div className={`d-flex my-4 ${css.filter}`}>
        סנן עפ"י: &nbsp;&nbsp;
        <select
          className='form-select'
          name='category'
          id='category'
          onChange={(e) => {
            let menu = e.currentTarget.value;
            switch (menu) {
              case 'all': setMenu(theMenu); break;
              case 'glutenFree': setMenu(glutenFree2); break;
              case 'vegetarian': setMenu(vegetarian); break;
              case 'both': setMenu(glutandvaga); break;
            }
          }}>
          <option value="all">הצג הכל</option>
          <option value="glutenFree">נטול גלוטן</option>
          <option value="vegetarian">צמחוני</option>
          <option value="both">נטול גלוטן וצמחוני</option>
        </select>
      </div>

      <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
        {menuu.map((a) => (
          <MenuItem key={a.id} {...a} />
        ))}
      </div>

      <button className="btn btn-outline-secondary mb-3" onClick={() => { navigate(-1); }}>חזרה לתפריט ראשי</button>
    </div >
  )
}

export default Menu