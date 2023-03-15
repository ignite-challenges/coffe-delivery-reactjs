import { Bank, CreditCard, CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CoffeeCartCheckout } from '../../components/CoffeeCartCheckout'
import { CartContext } from '../../contexts/CartContext'
import { formatCurrency } from '../../utils/functions'
import { EmptyCart } from './components/EmptyCart'

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
  ProductCartValueContainer,
  ProductCartContainer,
  InputWrapperContainer,
  SelectPaymentButton,
} from './styles'

const newOrderFormValidationSchema = zod.object({
  zipcode: zod.number().min(8, 'Entre com um CEP válido'),
  address: zod.string().min(1, 'Entre com um endereço válido').nonempty(),
  number: zod.number().min(1, 'Entre com um número válido'),
  complement: zod.string(),
  city: zod.string().min(1, 'Entre com uma cidade válida').nonempty(),
  neighborhood: zod.string().nonempty(),
  uf: zod
    .string()
    .min(2, 'Entre com um UF válido')
    .max(2, 'Entre com um UF válido'),
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

type PaymentTypeProps = 'debit' | 'credit' | 'money' | ''

export function Checkout() {
  const { cartState, FinishCoffeOrder } = useContext(CartContext)
  const { products } = cartState

  const navigate = useNavigate()

  const [paymentType, setPaymentType] = useState<PaymentTypeProps>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const emptyCart = products.length === 0

  const deliveryValue = 3.9
  const sumAllItemsInCart = products.reduce(
    (accumulator, current) => accumulator + current.value * current.amount,
    0,
  )

  const haveErrorsInput = Object.keys(errors).length !== 0

  function handleSelectPaymentType(type: PaymentTypeProps) {
    setPaymentType(type)
  }

  function handleCreateNewOrder(data: NewOrderFormData) {
    navigate('/success', { state: { ...data, paymentType } })
    FinishCoffeOrder()
    reset()
  }

  if (emptyCart) return <EmptyCart />

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
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
              <input
                placeholder="CEP"
                id="zipcode"
                {...register('zipcode', { valueAsNumber: true })}
                type="number"
              />
            </InputWrapperContainer>
            <InputWrapperContainer size="l">
              <input placeholder="Rua" id="address" {...register('address')} />
            </InputWrapperContainer>
            <div>
              <InputWrapperContainer size="m">
                <input
                  placeholder="Número"
                  id="number"
                  {...register('number', { valueAsNumber: true })}
                  type="number"
                />
              </InputWrapperContainer>
              <InputWrapperContainer size="ml">
                <input
                  placeholder="Complemento"
                  id="complement"
                  {...register('complement')}
                />
              </InputWrapperContainer>
            </div>
            <div>
              <InputWrapperContainer size="m">
                <input
                  placeholder="Bairro"
                  id="neighborhood"
                  {...register('neighborhood')}
                />
              </InputWrapperContainer>
              <InputWrapperContainer size="sl">
                <input placeholder="Cidade" id="city" {...register('city')} />
              </InputWrapperContainer>
              <InputWrapperContainer size="s">
                <input placeholder="UF" id="uf" {...register('uf')} />
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
            <SelectPaymentButton
              type="button"
              selected={paymentType === 'credit'}
              onClick={() => handleSelectPaymentType('credit')}
            >
              <CreditCard weight="regular" size={16} />
              CARTÃO DE CRÉDITO
            </SelectPaymentButton>
            <SelectPaymentButton
              type="button"
              selected={paymentType === 'debit'}
              onClick={() => handleSelectPaymentType('debit')}
            >
              <Bank weight="regular" size={16} />
              CARTÃO DE DÉBITO
            </SelectPaymentButton>
            <SelectPaymentButton
              type="button"
              selected={paymentType === 'money'}
              onClick={() => handleSelectPaymentType('money')}
            >
              <CurrencyDollar weight="regular" size={16} />
              DINHEIRO
            </SelectPaymentButton>
          </PaymentsButtonContainer>
        </WrapperContainer>
      </AddressContainer>
      <SelectedProductsContainer>
        <strong>Cafés selecionados</strong>
        <WrapperContainer sidesRadiusEnds>
          {products.map((product) => (
            <ProductsCartContainer key={product.id}>
              <img
                src={product.img}
                alt="Imagem meramente ilustrativa de um copo com café"
              />

              <ProductCartContainer>
                <ProductCartValueContainer>
                  <p>{product.title}</p>
                  <strong>
                    R$ {formatCurrency(product.value * product.amount)}
                  </strong>
                </ProductCartValueContainer>
                <CoffeeCartCheckout id={product.id} amount={product.amount} />
              </ProductCartContainer>
            </ProductsCartContainer>
          ))}
          <ValuesInformationContainer>
            <div>
              <span>Total de itens</span>
              <p>R$ {formatCurrency(sumAllItemsInCart)}</p>
            </div>
            <div>
              <span>Entrega</span>
              <p>R$ {formatCurrency(deliveryValue)}</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>
                R$ {formatCurrency(sumAllItemsInCart + deliveryValue)}
              </strong>
            </div>
            <button disabled={haveErrorsInput || paymentType === ''}>
              CONFIRMAR PEDIDO
            </button>
          </ValuesInformationContainer>
        </WrapperContainer>
      </SelectedProductsContainer>
    </CheckoutContainer>
  )
}
