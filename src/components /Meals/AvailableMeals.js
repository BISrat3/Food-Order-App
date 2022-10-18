import React from 'react'
import classes from './AvailableMeals.module.css'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name:'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id:'m2',
        name:'Schbitzel',
        description: 'A german speciality',
        price:16.5
    },
    {
        id:'m3',
        name:'Tibs',
        description: 'Ethiopian Food',
        price:18.5
    },
    {
        id:'m4',
        name:'Barbecue Burger',
        description: 'American, raw, meaty ',
        price:17.5
    },
]

export default function AvailableMeals() {
    const mealsList= DUMMY_MEALS.map( (meal)=> <li> {meal.name}</li>);
  return (
    <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>
  )
}
