import { createReducer } from '@reduxjs/toolkit'
import * as actions from './ticketsActions'

const initialState = {
  isLoading: false,
  tickets: [],
}

export const TicketsReducer = createReducer(initialState, {
  [actions.setIsLoading]: (state, action) => {
    state.isLoading = action.payload
  },
  [actions.setTickets]: (state, action) => {
    state.tickets = action.payload
  },
})
