import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  align-items: center;

  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  p {
    color: ${(props) => props.theme['purple-dark']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;

  transition: background 0.2s;

  :hover {
    background: ${(props) => props.theme.yellow};
  }
`

export const AmountProductCartContainer = styled.div`
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;

  height: 1.25rem;
  width: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 9.4rem;
  top: 1.8rem;

  p {
    margin-top: 0.114rem;
    margin-left: 0.1rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
    font-family: 'Roboto', sans-serif;
  }
`
