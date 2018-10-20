import axios from 'axios';

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

const _loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  products,
});

// name: {
//   type: conn.Sequelize.STRING,
//   allowNull: false,
//   unique: true,
//   validate: {
//     notEmpty: true
//   }

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return action.products
    default: return state;
  }
}

export const loadProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then(res => res.data)
      .then(products => dispatch(_loadProducts(products)))
  };
};

export default productsReducer;
