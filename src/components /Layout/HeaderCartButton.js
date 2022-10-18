import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
export default function HeaderCartButton() {
  return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span> Text Cart</span>
            <span className={classes.badge}> 3</span>
        </button>
  )
}