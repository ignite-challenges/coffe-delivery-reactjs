import { Minus, Plus } from 'phosphor-react'

import { CartInputContainer } from './styles'

export function CoffeeCartInput() {
  return (
    <CartInputContainer>
      <Minus size={14} weight="bold" />
      <span>1</span>
      <Plus size={14} weight="bold" />
    </CartInputContainer>
  )
}
