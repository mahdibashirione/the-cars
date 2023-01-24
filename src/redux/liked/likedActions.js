import { Add_Like, remove_Like } from "./likedType"

export const likeAction = (payload) => {
  return {
    type: Add_Like,
    payload,
  }
}

export const unLikeAction = (payload) => {
  return {
    type: remove_Like,
    payload,
  }
}