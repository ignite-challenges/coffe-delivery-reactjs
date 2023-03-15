import { Minus, Plus, Trash } from 'phosphor-react'
import { FormEvent, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { CartActionInputContainer, ProductCartActionsContainer } from './styles'

interface CoffeeCartCheckoutProps {
  id: number
  amount: number
}

export function CoffeeCartCheckout({ amount, id }: CoffeeCartCheckoutProps) {
  const {
    DecrementCoffeAmountCart,
    RemoveCoffeFromCart,
    IncrementCoffeAmountCart,
  } = useContext(CartContext)

  function handleIncrementCoffeAmount() {
    IncrementCoffeAmountCart(id)
  }

  function handleDecrementCoffeAmount() {
    DecrementCoffeAmountCart(id)
  }

  function handleRemoveCoffe(event: FormEvent) {
    event.preventDefault()
    RemoveCoffeFromCart(id)
  }

  return (
    <ProductCartActionsContainer>
      <CartActionInputContainer>
        <Minus size={14} weight="bold" onClick={handleDecrementCoffeAmount} />
        <span>{amount}</span>
        <Plus size={14} weight="bold" onClick={handleIncrementCoffeAmount} />
      </CartActionInputContainer>
      <button onClick={handleRemoveCoffe}>
        <Trash weight="regular" size={16} />
        REMOVER
      </button>
    </ProductCartActionsContainer>
  )
}
