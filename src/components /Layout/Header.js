import React from 'react'
import { Fragment } from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'

export default function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of spicy  food'/>
        </div>
    </Fragment>
  )
}
