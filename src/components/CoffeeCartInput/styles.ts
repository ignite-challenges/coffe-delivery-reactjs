import styled from 'styled-components'

export const CartInputContainer = styled.div``

export const CartActionInputContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 6px;

  svg {
    background: transparent;
    display: flex;
    border: 0;
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    transition: color 0.2s;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    width: 1.875rem;

    text-align: center;

    color: #272221;
  }
`

export const ShoppingCartContainer = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  display: flex;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;

  :hover {
    background: ${(props) => props.theme.purple};
  }

  transition: background 0.2s;

  svg {
    color: ${(props) => props.theme.white};
  }
`
