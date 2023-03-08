import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  SectionContainer,
  IconContainer,
  InfoContainer,
  ProductsContainer,
  CoffeeCardContainer,
} from './styles'

import { CoffeeCard } from '../../components/CoffeeCard'

import HomeBackground from '../../assets/home-background.svg'
import CoffeImage from '../../assets/coffe-main.png'

export function Home() {
  return (
    <main>
      <SectionContainer backgroundImage={HomeBackground}>
        <InfoContainer>
          <strong>
            Encontre o café perfeito
            <br />
            para qualquer hora do dia
          </strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a
            <br />
            qualquer hora
          </p>

          <footer>
            <IconContainer backgroundColor="yellow-dark">
              <ShoppingCart weight="fill" />
              <label>Compra simples e segura</label>
            </IconContainer>

            <IconContainer backgroundColor="base-text">
              <Package weight="fill" />
              <label>Embalagem mantém o café intacto</label>
            </IconContainer>

            <IconContainer backgroundColor="yellow">
              <Timer weight="fill" />
              <label>Entrega rápida e rastreada</label>
            </IconContainer>

            <IconContainer backgroundColor="purple">
              <Coffee weight="fill" />
              <label>O café chega fresquinho até você</label>
            </IconContainer>
          </footer>
        </InfoContainer>
        <img src={CoffeImage} alt="Imagem de um cope de cafe com a logomarca" />
      </SectionContainer>
      <ProductsContainer>
        <strong>Nossos cafés</strong>
        <CoffeeCardContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeCardContainer>
      </ProductsContainer>
    </main>
  )
}
