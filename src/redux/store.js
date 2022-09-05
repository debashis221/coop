// src/redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import authSlice from './features/authSlice'
import usersSlice from './features/usersSlice'
import ordersSlice from './features/orderSlice'
import productsSlice from './features/productsSlice'

const persistConfig = {
  key: 'root',
  blacklist: ['auth'],
  throttle: 500,
  version: 1,
  storage
}
const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  orders: ordersSlice,
  products: productsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
