import React from 'react'
import { Dish } from '../../@types/types'
import css from './MenuItem.module.scss'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { cart } from '../../features/cart/cartSlice'

const MenuItem = ({ image, name, description, category, price, id, inCart }: Dish) => {
  const dispatch = useAppDispatch()
  const dish = useAppSelector(state => state.cart.menu).filter(m => m.id === id)[0]


  return (
    <div className={`card m-2 ${css.card}`}>
      <div className='card-body'>
        <h4 className='card-title'>{name}</h4>
        <img className='w-100 mx-auto' src={image} alt={name} />
        <p className='card-text'>{description}</p>

        <h6 className={` ${css.price} mx-auto mb-3`}>{price} &#8362; </h6>
        
        <button className="btn" onClick={() => dispatch(cart(id))}>
          {dish.inCart && <Badge color="secondary" badgeContent={1}><ShoppingCartIcon /></Badge>}
          {!dish.inCart && <ShoppingCartIcon />}
        </button>
      </div>
    </div >
  )
}

export default MenuItem