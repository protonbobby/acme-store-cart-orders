import axios from 'axios';

const SET_COUNT = 'SET_COUNT';

const _setCount = count => ({
  type: SET_COUNT,
  count
})

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_COUNT:
      return action.count;
    default: return state;
  }
};

export const loadCount = () => {
  return (dispatch) => (
    axios.get('/api/count')
      .then(res => res.data)
      .then(({ count }) => dispatch(_setCount(count)))
  )
}

export default countReducer;
