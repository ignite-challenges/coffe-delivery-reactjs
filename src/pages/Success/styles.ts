import styled from 'styled-components'

export const SuccessContainer = styled.main`
  padding: 5.75rem 10rem;

  > strong {
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 0.25rem;
    line-height: 1.3;
  }
`

export const WrapperContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  gap: 6.375rem;
`

export const OrdersContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: double 2px transparent;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  width: 100%;
`

const InformationContainerColors = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface InformationContainerProps {
  backgroundColor: keyof typeof InformationContainerColors
}

export const InformationContainer = styled.div<InformationContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  strong {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
  }

  svg {
    background: ${(props) => props.theme[props.backgroundColor]};
    color: ${(props) => props.theme.white};
    height: 2rem;
    width: 2rem;
    padding: 0.5rem 0;
    border-radius: 50%;
  }
`
