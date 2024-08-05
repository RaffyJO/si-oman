import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'

// export default configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// })

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
console.log('oncreate', store.getState())

store.subscribe(() => {
    console.log('state changed', store.getState())
})

export default store