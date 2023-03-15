import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import {
  InformationContainer,
  WrapperContainer,
  OrdersContainer,
  SuccessContainer,
} from './styles'

import SuccessIllustration from '../../assets/success-illustration.svg'

import { NewOrderFormData } from '../Checkout'
import { OrderError } from './components/OrderError'

export function Success() {
  const location = useLocation()
  const data = location.state as NewOrderFormData & {
    paymentType: 'credit' | 'debit' | 'money'
  }

  const paymentType = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Cartão de crédito',
  }

  if (!data) return <OrderError />

  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <WrapperContainer>
        <OrdersContainer>
          <InformationContainer backgroundColor="purple">
            <MapPin weight="fill" />
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  Rua {data.address}, {data.number}
                </strong>
              </p>
              <p>
                {data.neighborhood} - {data.city} - {data.uf}
              </p>
            </div>
          </InformationContainer>

          <InformationContainer backgroundColor="yellow">
            <Timer weight="fill" />
            <div>
              <p>Entrega rápida e rastreada</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InformationContainer>

          <InformationContainer backgroundColor="yellow-dark">
            <CurrencyDollar weight="regular" />
            <div>
              <p>Pagamento na entrega </p>
              <strong>{paymentType[data.paymentType]}</strong>
            </div>
          </InformationContainer>
        </OrdersContainer>
        <img
          src={SuccessIllustration}
          alt="Imagem meramente ilustrativa de um café"
        />
      </WrapperContainer>
    </SuccessContainer>
  )
}
