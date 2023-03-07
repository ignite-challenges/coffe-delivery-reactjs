import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  img {
    position: relative;
    bottom: 1.25rem;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeTypeContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;

  label {
    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`

export const CoffeeFooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.063rem;
  color: ${(props) => props.theme['base-text']};

  justify-content: space-between;

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.138rem;
  }

  strong {
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ShoppingCartContainer = styled.div`
  background: ${(props) => props.theme['purple-dark']};
  display: flex;
  padding: 0 0.5rem;
  height: 100%;
  border-radius: 6px;

  :hover {
    background: ${(props) => props.theme.purple};
  }

  transition: background 0.2s;

  svg {
    color: ${(props) => props.theme.white};
  }
`
