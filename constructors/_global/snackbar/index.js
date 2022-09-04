import reducer from '@_utils/reducer'

import reducers from './reducers'

const INITIAL_STATE = {
  open: false,
  message: '',
  variant: 'info',
}

export default reducer(Object.assign(reducers), INITIAL_STATE)
