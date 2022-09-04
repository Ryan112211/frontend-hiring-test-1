import reducer from '@_utils/reducer'

import reducers from './reducers'

const INITIAL_STATE = {
  open: true,
  name: '',
  button: true,
}

export default reducer(Object.assign(reducers), INITIAL_STATE)
