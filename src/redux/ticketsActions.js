import { createAction } from '@reduxjs/toolkit'
import { ticketsApi } from '../api/ticketsApi'

export const setTickets = createAction('SET_TICKETS')
export const setIsLoading = createAction('SET_IS_LOADING')

export const getTickets = () => async (dispatch) => {
  dispatch(setIsLoading(true))
  const res = await ticketsApi.getTickets()
  dispatch(setTickets(res.data))
  dispatch(setIsLoading(false))
}
