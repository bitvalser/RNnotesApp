import { AuthAction } from '../actions/authorization';

const initialState = {
  isLoading: false,
  isLogin: false,
  data: {
    user: null
  }
};

export const authorization = (state = initialState, action) => {
  switch (action.type) {
    case AuthAction.REGISTER:
    case AuthAction.LOGIN:
    case AuthAction.INIT_AUTH:
      return {
        ...state,
        isLoading: true
      };
    case AuthAction.LOGIN_SUCCESS:
    case AuthAction.REGISTER_SUCCESS:
    case AuthAction.AUTH_STATE_LOGIN:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: {
          user: action.payload
        }
      };
    case AuthAction.AUTH_STATE_NOT_LOGIN:
      return {
        ...state,
        isLoading: false,
        isLogin: false
      };
    case AuthAction.REGISTER_FAILED:
    case AuthAction.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false
      };
    case AuthAction.LOGOUT:
      return {
        ...state,
        isLogin: false,
        data: {
          user: null
        }
      };
    default:
      return state;
  }
};
