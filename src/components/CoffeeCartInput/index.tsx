import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CoffeCardProps } from '../CoffeeCard'

import {
  CartInputContainer,
  ShoppingCartContainer,
  CartActionInputContainer,
} from './styles'

export function CoffeeCartInput({ data }: CoffeCardProps) {
  const { AddToCart } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function handleIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    if (amount === 1) return
    setAmount((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    AddToCart({ ...data, amount })
    setAmount(1)
  }

  return (
    <CartInputContainer>
      <CartActionInputContainer>
        <Minus size={14} weight="bold" onClick={handleDecreaseAmount} />
        <span>{amount}</span>
        <Plus size={14} weight="bold" onClick={handleIncreaseAmount} />
      </CartActionInputContainer>
      <ShoppingCartContainer onClick={handleAddCoffeeToCart}>
        <ShoppingCart size={22} weight={'fill'} />
      </ShoppingCartContainer>
    </CartInputContainer>
  )
}
