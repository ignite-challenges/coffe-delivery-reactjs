import { createContext, ReactNode, useReducer } from 'react'
import { CartReducer, Coffee } from '../reducers/cart/reducer'
import {
  addNewCoffee,
  decrementCoffeeAmount,
  incrementCoffeeAmount,
  removeCoffee,
  finishCoffeOrder,
} from '../reducers/cart/actions'

interface CartStateProps {
  products: Coffee[]
}

interface CartContextType {
  cartState: CartStateProps
  AddToCart: (data: Coffee) => void
  IncrementCoffeAmountCart(id: number): void
  DecrementCoffeAmountCart(id: number): void
  RemoveCoffeFromCart(id: number): void
  FinishCoffeOrder(): void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(CartReducer, {
    products: [],
  })

  function AddToCart(data: Coffee) {
    dispatch(addNewCoffee(data))
  }

  function IncrementCoffeAmountCart(id: number) {
    dispatch(incrementCoffeeAmount(id))
  }

  function DecrementCoffeAmountCart(id: number) {
    dispatch(decrementCoffeeAmount(id))
  }

  function RemoveCoffeFromCart(id: number) {
    dispatch(removeCoffee(id))
  }

  function FinishCoffeOrder() {
    dispatch(finishCoffeOrder())
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        AddToCart,
        IncrementCoffeAmountCart,
        DecrementCoffeAmountCart,
        RemoveCoffeFromCart,
        FinishCoffeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
