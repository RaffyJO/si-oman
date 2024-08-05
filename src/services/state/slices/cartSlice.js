import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, price, quantity } = action.payload
            const existingItem = state.data.find((item) => item.id === id)
            if (existingItem) {
                existingItem.quantity += quantity
            } else {
                state.data.push({ id, price, quantity })
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            const index = state.data.findIndex((item) => item.id === id)
            if (index !== -1) {
                state.data.splice(index, 1)
            }
        },
        clearCart: (state) => {
            state.data = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer