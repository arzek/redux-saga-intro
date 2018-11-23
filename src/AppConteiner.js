import { connect } from 'react-redux';
import App from './App';
const props = (state) => state;
const dispatch = (dispatch) => {
  return {
    getData: () => {
      dispatch({ type: 'GET_DATA' })
    }
  }
}
export default connect(props, dispatch)(App);

