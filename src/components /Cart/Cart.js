import React, {useState, useContext} from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import CheckOut from './CheckOut'

export default function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length >0; 
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    
    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item)
        // cartCtx.addItem({ ...item, amount:1 })
    }
    
    // when ever it is clicked I want to make sure the checkout form
    const orderHandler =()=>{
        setIsCheckout(true)
    }
    
    // where that cart data should be submitted to the server recieve using user data make sure this function called inside checkout component
    const submitOrderHandler = async (userData)=>{
        setIsSubmitting(true)
        // we need to request the service to backend 
        // we need to send it from input data as well as cart data to backend and we have to await to check
        await fetch('https://foodorder-b91c4-default-rtdb.firebaseio.com/orders.json',{
            method: 'POST',
            // we need to send JSON data passing all user data
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        })
        // if is not submitted return back to previous state
        setIsSubmitting(false)
        setDidSubmit(true)
        // to cart once it is submitted
        cartCtx.clearCart()
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

    // using one modal 
    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {/* if checkout is truthy we need to render checkout */}
            {isCheckout && <CheckOut onConfirm={submitOrderHandler} onCancel={props.onClose}/>} 
            {/* to hide the form if it not checkout  */}
            {!isCheckout && modalActions }
        </React.Fragment> 
    )
    
    const isSubmittingModalContent = <p>Sending order data....</p>

    const didSubmitModalContent = 
        <React.Fragment>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.onClose}>Close</button>
            </div>
        </React.Fragment>
    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit &&  cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
  )
}
