import styled from 'styled-components'

interface SectionContainerProps {
  backgroundImage: string
}

export const SectionContainer = styled.section<SectionContainerProps>`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  padding: 5.75rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoContainer = styled.section`
  strong {
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 1rem;
    margin-bottom: 4.125rem;
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
  }
`

const IconContainerColors = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IconContainerProps {
  backgroundColor: keyof typeof IconContainerColors
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  label {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
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

export const ProductsContainer = styled.main`
  padding: 2rem 10rem;

  strong {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCardContainer = styled.div`
  margin-top: 2.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
`
