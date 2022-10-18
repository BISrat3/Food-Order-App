import React from 'react'
import { Fragment } from 'react'

import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

export default function Meals() {
  return (
    <Fragment>
        <AvailableMeals />
        <MealsSummary />
    </Fragment>
  )
}
