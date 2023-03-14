import styled from 'styled-components'

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
export const ProductCartActionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;

  button {
    display: flex;
    border: 0;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 0.5rem;
    gap: 0.25rem;

    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    align-items: center;

    &:hover {
      background-color: ${(props) => props.theme['base-hover']};

      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    svg {
      color: ${(props) => props.theme.purple};

      transition: color 0.2s;
    }

    transition: background 0.2s;
  }
`
