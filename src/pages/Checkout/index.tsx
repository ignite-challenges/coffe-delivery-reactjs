import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Trash,
} from 'phosphor-react'

import CoffeeImage from '../../assets/products/express-traditional.png'
import { CoffeeCartCheckout } from '../../components/CoffeeCartCheckout'

import { CoffeeCartInput } from '../../components/CoffeeCartInput'

import {
  CheckoutContainer,
  AddressContainer,
  SelectedProductsContainer,
  WrapperContainer,
  DescriptionContainer,
  PaymentsButtonContainer,
  AddressInputContainer,
  ValuesInformationContainer,
  ProductsCartContainer,
  ProductCartActionsContainer,
  ProductCartValueContainer,
  ProductCartContainer,
  InputWrapperContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <strong>Complete seu pedido</strong>
        <WrapperContainer>
          <DescriptionContainer>
            <MapPinLine size={22} weight="regular" />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </DescriptionContainer>
          <AddressInputContainer>
            <InputWrapperContainer size="m">
              <input placeholder="CEP" />
            </InputWrapperContainer>
            <InputWrapperContainer size="l">
              <input placeholder="Rua" />
            </InputWrapperContainer>
            <div>
              <InputWrapperContainer size="m">
                <input placeholder="Número" />
              </InputWrapperContainer>
              <InputWrapperContainer size="ml">
                <input placeholder="Complemento" />
              </InputWrapperContainer>
            </div>
            <div>
              <InputWrapperContainer size="m">
                <input placeholder="Bairro" />
              </InputWrapperContainer>
              <InputWrapperContainer size="sl">
                <input placeholder="Cidade" />
              </InputWrapperContainer>
              <InputWrapperContainer size="s">
                <input placeholder="UF" />
              </InputWrapperContainer>
            </div>
          </AddressInputContainer>
        </WrapperContainer>
        <WrapperContainer>
          <DescriptionContainer>
            <CurrencyDollar weight="regular" />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </DescriptionContainer>

          <PaymentsButtonContainer>
            <button>
              <CreditCard weight="regular" size={16} />
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Bank weight="regular" size={16} />
              CARTÃO DE DÉBITO
            </button>
            <button>
              <CurrencyDollar weight="regular" size={16} />
              DINHEIRO
            </button>
          </PaymentsButtonContainer>
        </WrapperContainer>
      </AddressContainer>
      <SelectedProductsContainer>
        <strong>Cafés selecionados</strong>
        <WrapperContainer sidesRadiusEnds>
          <ProductsCartContainer>
            <img
              src={CoffeeImage}
              alt="Imagem meramente ilustrativa de um copo com café"
            />

            <ProductCartContainer>
              <ProductCartValueContainer>
                <p>Expresso Tradicional</p>
                <strong>R$ 9,90</strong>
              </ProductCartValueContainer>
              <CoffeeCartCheckout />
            </ProductCartContainer>
          </ProductsCartContainer>
          <ValuesInformationContainer>
            <div>
              <span>Total de itens</span>
              <p>R$ 29,70</p>
            </div>
            <div>
              <span>Entrega</span>
              <p>R$ 3,50</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <button>CONFIRMAR PEDIDO</button>
          </ValuesInformationContainer>
        </WrapperContainer>
      </SelectedProductsContainer>
    </CheckoutContainer>
  )
}
