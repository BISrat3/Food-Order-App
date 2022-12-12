import React, {useEffect, useState} from 'react'
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
    const [meals, setMeals] = useState([])
   // we will say state true because we are loading the data clearly 
    const [isLoading, setIsLoading] = useState(true)
    // we can see that we didn't see any error initially 
    const [httpError, setHttpError] = useState(null)


    // return a cleanup function which can be executed. which run syncronously 
    useEffect (()=>{
        // the useEffect will run when the component first is loaded, no props or other depenciirs here 
        const fetchMeals = async () => {
            
        const response = await fetch('https://foodorder-b91c4-default-rtdb.firebaseio.com/')
        // if there is error it will throw an error 
        if(!response.ok){
            throw new Error ('Something went wrong!')
        }

        // from fetch we can parse data 
        const responseData = await response.json()
        // response data is an object so i want to make it an array 
        // create new loadedmeals constant array
        const loadedMeals = [];
        
        // key from the firebase goes through response data object 
        for (const key in responseData){
            // we need to push to loadedMeals id, name...all the fields that we have
            // key will be id of individual field we are fetching 
            loadedMeals.push({
                id: key,
                name: responseData[key].name,
                description: responseData[key].description,
                price: responseData[key].price,
                })
            }
            // the array we popualted on the top
            setMeals(loadedMeals)
            // we set this because we are done of loading 
            setIsLoading(false)
        }
       
        // fetch data when the components are loaded
        // send http request to meal firebase
        fetchMeals().catch((error)=> {
            setIsLoading(false)
            setHttpError(error.message)
        })
        // empty array indicate there is no dependency 
    },[])


    // to render we simply check if loading it true 
    if(isLoading){
        return <section className={classes.MealsLoading}>
            <p>Loading....</p>
        </section>
    }

    if(httpError){
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }
    // initially the meals is empty array
    const mealsList= meals.map((meal)=> 
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
