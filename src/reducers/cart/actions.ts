import { Coffee } from './reducer'

export enum CartActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
}

export function addNewCoffee(newCoffee: Coffee) {
  return {
    type: CartActionTypes.ADD_NEW_COFFEE,
    payload: { newCoffee },
  }
}
