import {
  CoffeeContainer,
  CoffeeFooterContainer,
  CoffeeLabelsContainer,
  ShoppingCartContainer,
} from './styles'

import { CoffeeCartInput } from '../CoffeeCartInput'
import { ShoppingCart } from 'phosphor-react'

import { coffeesData } from '../../pages/Home/data'

interface CoffeCardProps {
  data: (typeof coffeesData)[0]
}

export function CoffeeCard({ data }: CoffeCardProps) {
  function formatCurrency(value: number): string {
    if (isNaN(value)) {
      return ''
    }

    const formattedValue = value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })

    return formattedValue.trim().replace('R$', '')
  }

  const value = formatCurrency(data.value)

  return (
    <CoffeeContainer>
      <img
        src={data.img}
        alt="Imagem meramente ilustrativa de um copo com café"
      />
      <CoffeeLabelsContainer>
        {data.labels.map((label) => (
          <div key={label}>
            <label>{label}</label>
          </div>
        ))}
      </CoffeeLabelsContainer>
      <h2>{data.title}</h2>
      <span>{data.subtitle}</span>

      <CoffeeFooterContainer>
        <p>
          R${` `}
          <strong>{value}</strong>
        </p>

        <div>
          <CoffeeCartInput />
          <ShoppingCartContainer>
            <ShoppingCart size={22} weight={'fill'} />
          </ShoppingCartContainer>
        </div>
      </CoffeeFooterContainer>
    </CoffeeContainer>
  )
}
