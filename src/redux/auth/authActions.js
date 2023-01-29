import { Sign_In, Sign_Out } from "./authType"

export const signIn = (payload) => {
  return {
    type: Sign_In,
    payload,
  }
}

export const signOut = () => {
  return {
    type: Sign_Out,
  }
}