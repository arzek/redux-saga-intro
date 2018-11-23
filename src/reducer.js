
const initialState = { data: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      return {
        data: action.payload
      }
    default:
      return state;
  }
}

export default reducer;