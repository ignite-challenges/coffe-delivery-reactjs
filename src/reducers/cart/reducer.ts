import { produce } from 'immer'

import { coffeesData } from '../../pages/Home/data'

import { CartActionTypes } from './actions'

export type Coffee = (typeof coffeesData)[0] & { amount: number }

interface CartState {
  products: Coffee[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case CartActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.products.push(action.payload.newCoffee)
      })
    default:
      return state
  }
}
