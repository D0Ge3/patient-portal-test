import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { TicketsReducer } from './ticketsReducer'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: { tickets: TicketsReducer },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})
