import React, {useContext} from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

export default function Cart(props) {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length >0; 

    const cartItemRemoveHandler = (id) => {}

    const cartItemAddHandler = (id) => {}

    const cartItems = 
        <ul className={classes['cart-items']}> 
    {/* {[
        { id: 'c1', name:'Sushi', amount: 2, price: 12.99},] */}
       {cartCtx.items.map
        ((item) => (
        // <li>
        //     {item.name}
        // </li>
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item.id)}
        />
    ))} </ul>
    
  return (
    <Modal OnClose={props.OnClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.OnClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}
