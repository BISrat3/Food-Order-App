import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

export default function Cart(props) {
    const cartItems = <ul className={classes['cart-items']}> {[
        { id: 'c1', name:'Sushi', amount: 2, price: 12.99},].map
        ((item) => 
        <li>
            {item.name}
        </li>
    )} </ul>
    
  return (
    <Modal OnClose={props.OnClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>36.2</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.OnClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}
