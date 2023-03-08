import React from 'react'
import { Dish } from '../../@types/types'
import css from './MenuItem.module.scss'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addToCart, removeFromCart } from '../../features/cartSlice'
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const MenuItem = ({ image, name, description, category, price, id, qty }: Dish) => {
  const dispatch = useAppDispatch()

  const menu = useAppSelector(state => state.cart.menu);

  const index = menu.findIndex(m => m.id === id);
  const quantity = menu[index].qty

  return (
    <div className={`card m-2 ${css.card}`} style={{ backgroundColor: '#fbf8ee' }}>
      <div className='card-body'>
        <h4 className='card-title'>{name}</h4>
        <img className='w-100 mx-auto' src={image} alt={name} />
        <p className='card-text'>{description}</p>

        <h6 className={` ${css.price} mx-auto mb-3`} style={{ position: 'absolute', bottom: '80px', right: '110px' }}>{price} &#8362; </h6>


        <div className={`p-3 ${css.cart}`} style={{ position: 'absolute', bottom: '15px', right: '60px' }}>
          <button className='btn btn-outline-secondary'
            onClick={() => { dispatch(addToCart(id)) }}>
            <AddIcon fontSize="small" />
          </button>

          <Badge color="secondary" badgeContent={quantity} className="mx-2 pt-1"><ShoppingCartIcon /></Badge>

          <button className='btn btn-outline-secondary'
            onClick={() => { dispatch(removeFromCart(id)) }}>
            <RemoveIcon fontSize="small" />
          </button>

        </div>


      </div>
    </div >
  )
}

export default MenuItem