import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import {
  CartContainer,
  HeaderContainer,
  LocationContainer,
  NavContainer,
} from './styles'

import LogoCoffeDelivery from '../../assets/logo.svg'

export function Header() {
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
      </NavContainer>
    </HeaderContainer>
  )
}
