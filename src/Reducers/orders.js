import axios from 'axios';
import { loadCount, _setCount } from './count';

const LOAD_ORDERS = 'LOAD_ORDERS';
const CREATE_ORDER = 'CREATE_ORDER';

const _loadOrders = orders => ({
  type: LOAD_ORDERS,
  orders
});

const _createOrder = order => ({
  type: CREATE_ORDER,
  order
})

//ORDERS
// id: {
//   type: conn.Sequelize.UUID, //Universally Unique IDentifier
//   defaultValue: conn.Sequelize.UUIDV4,
//   primaryKey: true
// },
// status: {
//   type: conn.Sequelize.ENUM('CART', 'ORDER'),
//   allowNull: false,
//   defaultValue: 'CART'
// }

//LINE ITEMS
//   quantity: {
//     type: conn.Sequelize.INTEGER,
//     defaultValue: 1
//   },
//   //productId
//   //orderId
// });

const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return action.orders
    case CREATE_ORDER:
      return [...state, action.order]
    default: return state;
  }
}

export const loadOrders = () => {
  return (dispatch) => {
    axios.get('/api/orders')
      .then(res => res.data)
      .then(orders => dispatch(_loadOrders(orders)))
  };
};

export const createOrder = (cart, history) => {
  return (dispatch) => {
    axios.put(`/api/orders/${cart.id}`, { status: 'ORDER' })
      .then(res => res.data)
      .then(() => {
        dispatch(loadOrders());
        dispatch(loadCount());
      })
      .then(() => history.push('/orders'))
  }
};

export const addToCart = (cart, product, lineItem) => {
  return (dispatch) => {
    if (lineItem) {
      return axios.put(`/api/orders/${cart.id}/lineItems/${lineItem.id}`, { quantity: ++lineItem.quantity })
        .then(response => response.data)
        .then((orders) => dispatch(loadOrders(orders)));
    }
    else {
      return axios.post(`/api/orders/${cart.id}/lineItems`, { quantity: 1, productId: product.id })
        .then(response => response.data)
        .then(orders => dispatch(loadOrders(orders)));
    }
  }
};

export const removeFromCart = (cart, lineItem) => {
  return (dispatch) => {
    if (lineItem.quantity !== 1) {
      return axios.put(`/api/orders/${cart.id}/lineItems/${lineItem.id}`, { quantity: --lineItem.quantity })
        .then(response => response.data)
        .then(orders => dispatch(loadOrders(orders)));
    }
    else {
      return axios.delete(`/api/orders/${cart.id}/lineItems/${lineItem.id}`)
        .then(response => response.data)
        .then(orders => dispatch(loadOrders(orders)));
    }
  }
};

export const reset = () => dispatch => (
  axios.post('/api/reset')
    .then(response => response.data)
    .then(orders => {
      dispatch(_loadOrders([]));
      dispatch(_setCount(0));
    })
);


export default ordersReducer;
