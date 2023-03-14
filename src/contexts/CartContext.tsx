import { createContext, ReactNode, useReducer } from 'react'
import { CartReducer, Coffee } from '../reducers/cart/reducer'
import { addNewCoffee } from '../reducers/cart/actions'

interface CartStateProps {
  products: Coffee[]
}

interface CartContextType {
  cartState: CartStateProps
  AddToCart: (data: Coffee) => void
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

  return (
    <CartContext.Provider
      value={{
        cartState,
        AddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
