import axios from 'axios'

export const ticketsApi = {
  getTickets() {
    // eslint-disable-next-line
    return axios.get('https://608e7920fe2e9c00171e25d0.mockapi.io/api/v1/tickets')
  },
}
