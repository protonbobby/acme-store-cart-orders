import axios from 'axios';

const LOAD_ORDERS = 'LOAD_ORDERS';

const _loadOrders = (orders) => ({
  type: LOAD_ORDERS,
  orders,
})

const initialState = [];
const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders
    default: return state;
  }
}

export const loadOrders = () => {
  return (dispatch) => {
    axios.get('/api/orders')
      .then(res => res.data)
      .then(orders => dispatch(_loadOrders(orders)))
      .catch(e => console.log(e));
  };
};

export default ordersReducer;
