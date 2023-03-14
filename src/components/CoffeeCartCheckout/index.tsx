import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'

import { CartActionInputContainer, ProductCartActionsContainer } from './styles'

export function CoffeeCartCheckout() {
  const [updateAmount, setUpdateAmountAmount] = useState(1)

  return (
    <ProductCartActionsContainer>
      <CartActionInputContainer>
        <Minus size={14} weight="bold" />
        <span>{updateAmount}</span>
        <Plus size={14} weight="bold" />
      </CartActionInputContainer>
      <button>
        <Trash weight="regular" size={16} />
        REMOVER
      </button>
    </ProductCartActionsContainer>
  )
}
