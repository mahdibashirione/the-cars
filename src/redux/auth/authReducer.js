import { Sign_In, Sign_Out } from "./authType";


const Key_Local = "keyAccessToken"
let initialState = JSON.parse(localStorage.getItem(Key_Local)) || false;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sign_In: {
      const updatedState = action.payload;
      return updatedState;
    }
    case Sign_Out: {
      localStorage.clear(Key_Local)
      return state = false;
    }

    default: return state
  }
}

export default authReducer;