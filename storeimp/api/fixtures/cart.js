export let cart = [
  {
    'inventory': 22,
    'quantity': 1,
    'productId': 1,
    'productType': 'd',
    'productPrice': 547,
    'productName': 'Lorem aliqua adipisicing',
    'rowId': 240,
    'roomId': 1,
    'roomPrice': 1200,
    'roomDescription': 'triple'
  },
  {
    'quantity': 1,
    'productType': 'b',
    'inventory': 100,
    'productPrice': 132,
    'productName': 'sunt do pariatur',
    'productId': 2,
    'rowId': 240,
    'roomId': 1,
    'roomPrice': 1200,
    'roomDescription': 'triple'
  },
  {
    'quantity': 1,
    'productType': 'b',
    'inventory': 58,
    'productPrice': 293,
    'productName': 'veniam irure adipisicing',
    'productId': 4,
    'rowId': 122,
    'roomId': 2,
    'roomPrice': 800,
    'roomDescription': 'single'
  }
]

export const cartPost = (config) => {
  const {data} = config
  cart = data
  return [200, {status: 'OK', error: false, errorMessage: ''}]
}
