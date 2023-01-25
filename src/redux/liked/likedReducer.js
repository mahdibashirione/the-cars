import { Add_Like, Remove_Like } from "./likedType";


let initialStateLike = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : []

const likedReducer = (state = initialStateLike, action) => {
  switch (action.type) {
    case Add_Like: {
      const preState = [...state]
      const updatedState = [...preState, action.payload]
      localStorage.setItem("likes", JSON.stringify(updatedState))
      return updatedState;
    }
    case Remove_Like: {
      const updatedState = state.filter(car => car.id !== action.payload.id)
      localStorage.setItem("likes", JSON.stringify(updatedState))
      return updatedState;
    }
    default: return state;
  }
}

export default likedReducer;