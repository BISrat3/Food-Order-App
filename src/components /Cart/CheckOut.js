import React, {useRef, useState} from 'react'
import classes from './CheckOut.module.css'

// check the value is empty 
const isEmpty = value => value.trim().length === ''
// character validation
const isNotFiveChars = value => value.trim().length !== 5;

export default function CheckOut(props) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true, 
        city: true,
        postalCode: true,
    })

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

        // check if the entered name is valid or not
        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalCodeIsValid = !isNotFiveChars(enteredPostalCode)
        const enteredCityIsValid = !isEmpty(enteredCity)

        // before form validity check form input validity
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid,
        })


        const formIsValid = 
            enteredNameIsValid && 
            enteredCityIsValid && 
            enteredPostalCode && 
            enteredCityIsValid ;

        
            // if it is not valid
        if (!formIsValid){
            return
        }
        // submit the cart data check the confirmation using user data we passedin 
        props.onConfirm({
            // check from the checkout component into cart component
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        })
    }
  return (
    <form classes={classes.form} onSubmit={confirmHandler}>
        {/* check the input style if it is valid or not  */}
        <div className={`${classes.control} ${
            formInputsValidity.name ? '': classes.invalid
        }`}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef}/>
            {!formInputsValidity.name && <p>please enter a valid name!</p>}
        </div>
        <div className={`${classes.control} ${
            formInputsValidity.street ? '': classes.invalid
        }`}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
            {!formInputsValidity.street && <p>Please enter a valid street address!</p>}
        </div>
        <div className={`${classes.control} ${
            formInputsValidity.postalCode ? '': classes.invalid
        }`}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalCodeInputRef}/>
            {!formInputsValidity.postalCode && <p>Please enter a valid postal code</p>}
        </div>
        <div className={`${classes.control} ${
            formInputsValidity.city ? '': classes.invalid
        }`}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
            {!formInputsValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit' className={classes.submit}>Confirm</button>
        </div>
    </form>
  )
}
