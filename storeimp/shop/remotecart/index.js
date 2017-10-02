export const state = () => {
  return {
    roomsCart: [],
    reservationCart: []
  }
}

export const mutations = {
  addRoomToCart (state, {room, rowId}) {
    state.roomsCart.push({room, rowId})
  },
  addToReservationCart (state, {product, quantity, price}) {
    const id = product.id
    state.reservationCart.push({id, product, quantity, price})
  },
  removeFromReservationCart (state, {productInCart, quantity = 0}) {
    if (quantity === 0 || quantity >= productInCart.quantity) {
      const index = state.reservationCart.findIndex(item => item.id === productInCart.id)
      if (index >= 0) {
        state.reservationCart.splice(index, 1)
      }
    } else {
      const item = state.reservationCart.find(item => item.id === productInCart.id)
      item.quantity -= quantity
    }
  },
  addToRoomCart (state, {product, quantity, price, rowId}) {
    const id = product.id
    const roomCart = state.roomsCart.find(row => row.rowId === rowId)
    const existingProduct = roomCart.find(row => row.id === id)

    if (roomCart) {
      if (!existingProduct) {
        roomCart.push({id, product, quantity, price})
      } else {
        existingProduct.quantity += quantity
      }
    }
  },
  removeFromRoomCart (state, {rowId, product, quantity = 0}) {
    const id = product.id
    const roomCart = state.roomsCart.find(row => row.rowId === rowId)

    if (roomCart) {
      const productInCartIndex = roomCart.findIndex(row => row.id === id)
      const productInCart = roomCart[productInCartIndex]

      if (quantity === 0 || quantity > productInCart.quantity) {
        state.roomsCart.splice(productInCartIndex, 1)
      } else {
        productInCart.quantity -= quantity
      }
    }
  }
}
