import {
  CoffeeContainer,
  CoffeeFooterContainer,
  CoffeeTypeContainer,
  ShoppingCartContainer,
} from './styles'

import CoffeeImage from '../../assets/products/express-traditional.png'

import { CoffeeCartInput } from '../CoffeeCartInput'
import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img
        src={CoffeeImage}
        alt="Imagem meramente ilustrativa de um copo com café"
      />
      <CoffeeTypeContainer>
        <label>tradicional</label>
      </CoffeeTypeContainer>
      <h2>Expresso Tradicional</h2>
      <span>O tradicional café feito com água quente e grãos moídos</span>

      <CoffeeFooterContainer>
        <p>
          R${` `}
          <strong>9,90</strong>
        </p>

        <div>
          <CoffeeCartInput />
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight={'fill'} />
          </ShoppingCartContainer>
        </div>
      </CoffeeFooterContainer>
    </CoffeeContainer>
  )
}
