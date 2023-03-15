export function formatCurrency(value: number): string {
  if (isNaN(value)) {
    return ''
  }

  const formattedValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return formattedValue.trim().replace('R$', '')
}
