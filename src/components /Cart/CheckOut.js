import React, {useRef} from 'react'
import classes from './Checkout.module.css'

export default function CheckOut(props) {
    // we use useRef for every key stroke when each form is submitted
    const nameInputRef = useRef()
    {/* use this ref whenever the user enter any key when the form is submitted  */}
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler =(event) =>{
        // prevent default to ensure the browser defalut which would be to send http request is prevented
        event.preventDefault()

        // using name inputref when ever the user enter any key . current that always gives you access to the actual value store in the InputRef 
        // every input object element in javascript has value properties that holds the actual value in that element
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

    }
  return (
    <form classes={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button type='submit'>Confirm</button>
        </div>
    </form>
  )
}
