import React, {useEffect} from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name:'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id:'m2',
//         name:'Schbitzel',
//         description: 'A german speciality',
//         price:16.5,
//     },
//     {
//         id:'m3',
//         name:'Tibs',
//         description: 'Ethiopian Food',
//         price:18.5,
//     },
//     {
//         id:'m4',
//         name:'Barbecue Burger',
//         description: 'American, raw, meaty ',
//         price:17.5,
//     },
// ]

export default function AvailableMeals() {

    useEffect (()=>{

        fetch()
    },[])

    const mealsList= DUMMY_MEALS.map((meal)=> 
    <MealItem 
        key={meal.id} 
        id={meal.id}
        name ={meal.name} 
        description={meal.description} 
        price={meal.price} 
    />);
    
  return (
    <section className={classes.meals}>
       <Card>
            <ul>{mealsList}</ul>
       </Card>
    </section>
  )
}
