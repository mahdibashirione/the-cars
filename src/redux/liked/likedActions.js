import { Add_Like, Remove_Like } from "./likedType"

export const likeAction = (payload) => {
  return {
    type: Add_Like,
    payload: payload,
  }
}

export const unLikeAction = (payload) => {
  return {
    type: Remove_Like,
    payload: payload,
  }
}