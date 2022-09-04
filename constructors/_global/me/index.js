import reducer from '@_utils/reducer'

import reducers from './reducers'

const INITIAL_STATE = {
  providers: [],
  user: {
    id: '',
    email: '',
  },
  employee: {
    id: '',
    department: { name: '' },
    departmentLevel: { name: '' },
    fullname: '',

  },
  error: { message: '' },
  isError: false,
  isLoading: false,
}

export default reducer(Object.assign(reducers), INITIAL_STATE)
