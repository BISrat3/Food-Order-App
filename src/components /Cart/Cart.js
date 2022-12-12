import React, {useState, useContext} from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CheckOut from './Checkout'

export default function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false)
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length >0; 

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        // cartCtx.addItem(item)
        cartCtx.addItem({ ...item, amount:1 })
    }

    // when ever it is clicked I want to make sure the checkout form
    const orderHandler =()=>{
        setIsCheckout(true)
    }

    const cartItems = (
        <ul className={classes['cart-items']}> 
    {/* {[
        { id: 'c1', name:'Sushi', amount: 2, price: 12.99},] */}
        {/* // <li>
        //     {item.name}
        // </li> */}
       {cartCtx.items.map((item) => (
        <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
        />
        ))} 
        </ul>
    )
    
    const modalActions = (
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick ={props.onClose}>Close</button>
        {/* we insert onclick function to trigger some functions to order handler */}
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>
    )

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {/* if checkout is truthy we need to render checkout */}
       {isCheckout && <CheckOut onCancel={props.onClose}/>} 
       {/* to hide the form if it not checkout  */}
       {!isCheckout && <modalActions /> }
       
    </Modal>
  )
}
