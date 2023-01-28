import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import MenuItem from './MenuItem'
import css from './Menu.module.scss'
import { Dish } from '../../@types/types'
import { useNavigate, useParams } from 'react-router-dom'
import { mainMenu, homeMenu } from '../../services/mainMenu'
import Cart from '../cart/Cart'
import { cart } from '../../features/cart/cartSlice'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect } from 'react'



const Menu = () => {
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenFree, setIsGultenFree] = useState(false);


  const dispatch = useDispatch()
  const { menu, glutenFree } = useParams();
  const mainMenu = useAppSelector(state => state.cart.menu);
  let theMenu = mainMenu.filter((m) => m.category === menu);
  const navigate = useNavigate()
  const category = homeMenu.find(c => c.category === menu)!
  const category2 = category.category
  const nameOfCategory = category.name

  const glutenFree2 = theMenu.filter(m => m.glutenFree)
  const vegetarian = theMenu.filter(m => m.vegetarian)
  const glutandvaga = theMenu.filter(m => m.glutenFree && m.vegetarian)
  const [menuu, setMenu] = useState(theMenu)
  // const [menuu, setMenu] = useState({ menu: theMenu })
  //const cartMenu = mainMenu.filter(m => m.inCart)

  const handleCondotionVegan = (e: any) => {
    setIsVegetarian(e.currentTarget.checked);
    changeMenu()
  }

  const handleGlutenFree = (e: any) => {
    setIsGultenFree(e.currentTarget.checked);
    changeMenu()
  }

  // console.log('gluten ' + isGlutenFree);
  // console.log('vegan ' + isVegetarian);

  const changeMenu = () => {
    if (isGlutenFree && isVegetarian) {
      //setMenu(state => ({ ...state, menu: glutandvaga }))
      setMenu(glutandvaga)
    }

    if (isGlutenFree) {
      setMenu(glutenFree2)
    }

    if (isVegetarian) {
      setMenu(vegetarian)
    }

    if (!(isGlutenFree && isVegetarian)) {
      setMenu(theMenu)
    }

    // ((isGlutenFree) ?? setMenu(glutenFree2));
    // ((isVegetarian) ? setMenu(vegetarian) : setMenu(theMenu));
    // ((isGlutenFree) ? setMenu(glutenFree2) : setMenu(theMenu));
    //(!(isGlutenFree && isVegetarian) ?? setMenu(theMenu));
  }




  return (
    <div dir='rtl' className='container text-center'>
      <h2 className='my-3'>{nameOfCategory}</h2>

      {/* <button onClick={() => {
         navigate(`/${glutenFree}`)  
        glutenFree2.map((a)=>(
          <MenuItem key={a.id} {...a}/>
        ))
      }}>Glutten Free</button> */}

      {/* <button onClick={() => {
        setMenu(glutenFree2)
      }}>Glutten Free</button>

      <button onClick={() => {
        setMenu(vegetarian)
      }}>Vegetarian</button>*/}

      {/* <button onClick={() => {
        setMenu(glutandvaga)
      }}>Both</button>

      <button onClick={() => {
        setMenu(theMenu)
      }}>All</button> 

      <div className='label-input m-2'>
        <label htmlFor="gluten">נטול גלוטן</label>
        <input
          type='checkbox'
          id='gluten'
          onChange={(e) => {
            const free = e.currentTarget.checked;
            (free ? setMenu(glutenFree2) : setMenu(theMenu))
          }}
          placeholder="gluten" />
      </div>

      <div className='label-input m-2'>
        <label htmlFor="vega">צמחוני</label>
        <input
          type='checkbox'
          id='vega'
          onChange={(e) => {
            const vega = e.currentTarget.checked;
            (vega ? setMenu(vegetarian) : setMenu(theMenu))
          }}
          placeholder="vega" />
      </div> */}

      {/* <div className='label-input m-2'>
        <label htmlFor="gluten">נטול גלוטן</label>
        <input
          type='checkbox'
          id='gluten'
          onChange={handleGlutenFree}
          placeholder="gluten" />
      </div>

      <div className='label-input m-2'>
        <label htmlFor="vega">צמחוני</label>
        <input
          type='checkbox'
          id='vega'
          onChange={handleCondotionVegan}
          placeholder="vega" />
      </div> */}


      <div className='d-flex flex-wrap justify-content-center mx-auto w-75'>
        {menuu.map((a) => (
          <MenuItem key={a.id} {...a} />
        ))}
      </div>
      <button className="btn btn-light w-50 mb-3" onClick={() => { navigate(-1); }}>חזרה לתפריט ראשי</button>
    </div >
  )
}

export default Menu