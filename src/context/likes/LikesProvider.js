import { createContext, useContext, useEffect, useReducer } from "react";

const LikeProvider = createContext()
const LikeProviderDispatcher = createContext()


let initialState = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : []
const reducer = (state, action) => {
  switch (action.type) {
    case "Like": {
      const preState = [...state]
      const updatedState = [...preState, { id: action.payload.id, name: action.payload.name }]
      localStorage.setItem("likes", JSON.stringify(updatedState))
      return updatedState;
    }
    case "Un_Like": {
      const updatedState = state.filter(car => car.id !== action.payload.id || car.name !== action.payload.name)
      localStorage.setItem("likes", JSON.stringify(updatedState))
      return updatedState;
    }
    default:
      return state
  }
}

const ContextLike = ({ children }) => {

  const [likes, setLikes] = useReducer(reducer, initialState)


  return (
    <LikeProvider.Provider value={likes} >
      <LikeProviderDispatcher.Provider value={setLikes}>
        {children}
      </LikeProviderDispatcher.Provider>
    </LikeProvider.Provider>
  );
}

export const useLike = () => useContext(LikeProvider)
export const useLikeDispatch = () => useContext(LikeProviderDispatcher)

export default ContextLike;