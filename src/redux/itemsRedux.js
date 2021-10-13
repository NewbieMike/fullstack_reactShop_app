import Axios from 'axios';

/* selectors */
export const getAll = ({items}) => items.data;
export const getOne = ({items}) => items.oneItem;



/* action name creator */
const reducerName = 'items';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_ONE_ITEM = createActionName('FETCH_ONE_ITEM');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchOneItem = payload => ({ payload, type: FETCH_ONE_ITEM });

/* thunk creators */
// export const fetchPublished = () => {
//   return (dispatch, getState) => {
//     const { items } = getState();
//     console.log('posts', items);

//     if(items.data.length === 0 || items.loading.active === false) {
//       dispatch(fetchStarted());

//       Axios
//         .get('http://localhost:8000/api/items')
//         .then(res => {
//           dispatch(fetchSuccess(res.data));
//         })
//         .catch(err => {
//           dispatch(fetchError(err.message || true));
//         });
//     }
//   };
// };
export const fetchItems = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const { items } = getState();
    console.log('items: ', items);
    Axios
      .get('http://localhost:8000/api/items')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
export const fetchOne = (id) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const { items } = getState();
    console.log('item: ', items);
    Axios
      .get(`http://localhost:8000/api/items/${id}`)
      .then(res => {
        dispatch(fetchOneItem(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case FETCH_ONE_ITEM: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        oneItem: action.payload,
      };
    }
    default:
      return statePart;
  }
};
