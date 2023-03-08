import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import {
  InformationContainer,
  WrapperContainer,
  OrdersContainer,
  SuccessContainer,
} from './styles'

import SuccessIllustration from '../../assets/success-illustration.svg'

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <strong>Cartão de Crédito</strong>
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
