import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  AmountProductCartContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import LogoCoffeDelivery from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartState } = useContext(CartContext)
  const hasProductsInCart = cartState.products.length > 0

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={LogoCoffeDelivery} alt="logomarca" />
      </NavLink>
      <NavContainer>
        <LocationContainer>
          <MapPin size={22} />
          <p>Simplício Mendes, PI</p>
        </LocationContainer>
        <NavLink to={'/checkout'}>
          <CartContainer>
            <ShoppingCart size={22} weight={'fill'} />
          </CartContainer>
        </NavLink>
        {hasProductsInCart && (
          <AmountProductCartContainer>
            <p>{cartState.products.length}</p>
          </AmountProductCartContainer>
        )}
      </NavContainer>
    </HeaderContainer>
  )
}
