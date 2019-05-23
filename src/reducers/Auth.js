import { SIGN_OUT, SIGN_IN } from "../constants";

const initialState = {
  isSign: null,
  userId: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSign: true,
        userId: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSign: false,
        userId: null
      };
    default:
      return state;
  }
};

export default auth;
