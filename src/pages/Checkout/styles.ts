import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;

  padding: 5.75rem 10rem;
  gap: 2rem;

  > strong {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`
export const AddressContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const DescriptionContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const SelectedProductsContainer = styled.section`
  display: flex;
  flex: 0.8;
  flex-direction: column;
`

interface WrapperContainerProps {
  sidesRadiusEnds?: boolean
}

export const WrapperContainer = styled.div<WrapperContainerProps>`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 0.938rem;
  border-radius: 6px;

  ${(props) =>
    props.sidesRadiusEnds &&
    css`
      border-radius: 6px 44px;
    `}
`

export const PaymentsButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

interface SelectPaymentButtonProps {
  selected: boolean
}

export const SelectPaymentButton = styled.button<SelectPaymentButtonProps>`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  margin-top: 2rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.6;

  color: ${({ theme }) => theme['base-text']};
  background: ${({ theme, selected }) =>
    theme[selected ? 'purple-light' : 'base-button']};
  border: 1px solid
    ${({ theme, selected }) => theme[selected ? 'purple' : 'base-button']};
  border-radius: 6px;

  &:hover {
    background: ${({ theme, selected }) =>
      theme[selected ? 'purple-light' : 'base-hover']};

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  transition: background 0.2s;

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.2s;
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  row-gap: 1rem;
  flex-direction: column;

  div {
    display: flex;
    gap: 1%;
  }
`

export const ValuesInformationContainer = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.75rem;
  }

  button {
    margin-top: 1.5rem;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0.75rem 0;
    border: 0;
    border-radius: 6px;
    background-color: ${(props) => props.theme.yellow};

    color: ${(props) => props.theme.white};
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      background-color: ${(props) => props.theme['base-subtitle']};
    }

    transition: background 0.2s;
  }
`

export const ProductsCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  img {
    height: 4rem;
    width: 4rem;
  }
`

export const ProductCartValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  justify-content: center;
`

const sizes = {
  s: '10',
  sl: '69',
  m: '20',
  ml: '79',
  l: '100',
} as const

interface InputWrapperContainerProps {
  size: keyof typeof sizes
}

export const InputWrapperContainer = styled.div<InputWrapperContainerProps>`
  display: flex;

  ${(props) =>
    css`
      width: ${sizes[props.size]}%;
    `}

  input {
    background: ${(props) => props.theme['base-input']};
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 0.75rem;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }
`
