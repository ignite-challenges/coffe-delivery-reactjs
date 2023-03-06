import {
  CoffeeContainer,
  CoffeeFooterContainer,
  CoffeeTypeContainer,
} from './styles'

import CoffeeImage from '../../assets/coffees/express-traditional.png'

export function CoffeeCard() {
  return (
    <CoffeeContainer>
      <img src={CoffeeImage} alt="Imagem meramente ilustrativa de um café" />
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
      </CoffeeFooterContainer>
    </CoffeeContainer>
  )
}
