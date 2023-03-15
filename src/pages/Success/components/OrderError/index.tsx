import { OrderErrorContainer } from './styles'

export function OrderError() {
  return (
    <OrderErrorContainer>
      <h1>
        Erro ao efetuar completar pedido
        <br /> por favor efetue o pedido novamente
      </h1>
    </OrderErrorContainer>
  )
}
