import reducer from '@_utils/reducer'

import reducers from './reducers'

const INITIAL_STATE = {
  error: { message: '' },
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  signin: {
    data: {
      email: '',
      password: '',
    },
    isLoading: false,
    error: { message: '' },
  },
}

export default reducer(Object.assign(reducers), INITIAL_STATE)
