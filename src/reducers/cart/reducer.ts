import { produce } from 'immer'

import { coffeesData } from '../../pages/Home/data'

import { CartActionTypes } from './actions'

export type Coffee = (typeof coffeesData)[0] & { amount: number }

interface CartState {
  products: Coffee[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_NEW_COFFEE: {
      return produce(state, (draft) => {
        const itemAlreadyExistsIndex = state.products.findIndex(
          (product) => product.id === action.payload.newCoffee.id,
        )

        if (itemAlreadyExistsIndex === 0) {
          draft.products[itemAlreadyExistsIndex].amount =
            draft.products[itemAlreadyExistsIndex].amount +
            action.payload.newCoffee.amount
        } else {
          draft.products.push(action.payload.newCoffee)
        }
      })
    }

    case CartActionTypes.REMOVE_COFFEE: {
      const currentCoffeeIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      return produce(state, (draft) => {
        draft.products.splice(currentCoffeeIndex, 1)
      })
    }

    case CartActionTypes.INCREMENT_AMOUNT_COFFEE: {
      const currentCoffeeIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        ++draft.products[currentCoffeeIndex].amount
      })
    }

    case CartActionTypes.DECREMENT_AMOUNT_COFFEE: {
      const currentCoffeeIndex = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )

      if (currentCoffeeIndex < 0) return state

      if (state.products[currentCoffeeIndex].amount === 1) return state

      return produce(state, (draft) => {
        --draft.products[currentCoffeeIndex].amount
      })
    }

    case CartActionTypes.FINISH_ORDER_COFFEE:
      return { ...state, products: [] }

    default:
      return state
  }
}
