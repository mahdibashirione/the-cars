import { createContext, forwardRef, useContext, useEffect, useReducer, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const LikeProvider = createContext()
const LikeProviderDispatcher = createContext()

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContextLike = ({ children }) => {

  let initialState = localStorage.getItem("likes") ? JSON.parse(localStorage.getItem("likes")) : []

  //state notification
  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  //Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "Like": {
        const preState = [...state]
        const updatedState = [...preState, action.payload]
        localStorage.setItem("likes", JSON.stringify(updatedState))
        setOpenSuccess(true)
        return updatedState;
      }
      case "Un_Like": {
        const updatedState = state.filter(car => car.id !== action.payload.id || car.name !== action.payload.name)
        localStorage.setItem("likes", JSON.stringify(updatedState))
        setOpenError(true)
        return updatedState;
      }
      default:
        return state
    }
  }

  const [likes, setLikes] = useReducer(reducer, initialState)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false)
    setOpenError(false)
  };

  return (
    <LikeProvider.Provider value={likes} >
      <LikeProviderDispatcher.Provider value={setLikes}>
        {children}
        <Snackbar
          open={openSuccess}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Liked Car
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            unLiked Car
          </Alert>
        </Snackbar>
      </LikeProviderDispatcher.Provider>
    </LikeProvider.Provider>
  );
}

export const useLike = () => useContext(LikeProvider)
export const useLikeDispatch = () => useContext(LikeProviderDispatcher)

export default ContextLike;