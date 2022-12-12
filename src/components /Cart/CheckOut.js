import React from 'react'
import classes from './Checkout.module.css'

export default function CheckOut(props) {

    const confirmHandler =(event) =>{
        // prevent default to ensure the browser defalut which would be to send http request is prevented
        event.preventDefault()
    }
  return (
    <form onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' />
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city'/>
        </div>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Confirm</button>
    </form>
  )
}
