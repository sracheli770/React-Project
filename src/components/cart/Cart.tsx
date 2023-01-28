import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart, removeFromCart } from '../../features/cart/cartSlice'

export default function App() {
    const itemsInCart = useAppSelector(state => state.cart.itemsInCart);
    const dispatch = useAppDispatch()
    const [itemCount, setItemCount] = useState(0);

    //use Cart component
    //{<div dir='ltr'>< Cart /></div>}

    return (
        <div className='p-3' /* style={{ display: "block", padding: 30 }} */>

             <h6><Badge color="secondary" badgeContent={itemsInCart}><ShoppingCartIcon /></Badge>{" "}הוסף לסל</h6>
            <ButtonGroup>
                <button className='btn btn-outline-secondary' onClick={() => {
                    dispatch(removeFromCart(1))
                }}> <RemoveIcon fontSize="small" /></button>

                <button className='btn btn-outline-secondary' onClick={() => {
                    dispatch(addToCart(1))
                }}> <AddIcon fontSize="small" /></button>
            </ButtonGroup> 


           

                {/* <Badge color="secondary" badgeContent={itemCount}>
                    <ShoppingCartIcon />{" "}
                </Badge>
                <ButtonGroup>
                    <Button
                        onClick={() => {
                            setItemCount(Math.max(itemCount - 1, 0));
                        }}
                    >
                        {" "}
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        onClick={() => {
                            setItemCount(itemCount + 1);
                        }}
                    >
                        {" "}
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>  */}
        </div>
    );
}