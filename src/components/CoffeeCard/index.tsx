import {
  CoffeeContainer,
  CoffeeFooterContainer,
  CoffeeLabelsContainer,
} from './styles'

import { CoffeeCartInput } from '../CoffeeCartInput'

import { coffeesData } from '../../pages/Home/data'

export interface CoffeCardProps {
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

        <CoffeeCartInput data={data} />
      </CoffeeFooterContainer>
    </CoffeeContainer>
  )
}
