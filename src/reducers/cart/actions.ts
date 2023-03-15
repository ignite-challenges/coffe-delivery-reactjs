import { Coffee } from './reducer'

export enum CartActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  DECREMENT_AMOUNT_COFFEE = 'DECREMENT_AMOUNT_COFFEE',
  INCREMENT_AMOUNT_COFFEE = 'INCREMENT_AMOUNT_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  FINISH_ORDER_COFFEE = 'FINISH_ORDER_COFFEE',
}

export function addNewCoffee(newCoffee: Coffee) {
  return {
    type: CartActionTypes.ADD_NEW_COFFEE,
    payload: { newCoffee },
  }
}

export function incrementCoffeeAmount(id: number) {
  return {
    type: CartActionTypes.INCREMENT_AMOUNT_COFFEE,
    payload: { id },
  }
}

export function decrementCoffeeAmount(id: number) {
  return {
    type: CartActionTypes.DECREMENT_AMOUNT_COFFEE,
    payload: { id },
  }
}

export function removeCoffee(id: number) {
  return {
    type: CartActionTypes.REMOVE_COFFEE,
    payload: { id },
  }
}

export function finishCoffeOrder() {
  return {
    type: CartActionTypes.FINISH_ORDER_COFFEE,
  }
}
