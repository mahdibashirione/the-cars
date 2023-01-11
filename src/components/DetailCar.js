import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { FiHeart } from "react-icons/fi";
import { useLike, useLikeDispatch } from "../context/likes/LikesProvider";
import { forwardRef, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailCar = ({ detail }) => {

  const likeState = useLike()
  const likeDispatch = useLikeDispatch()
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const isLike = likeState.findIndex(car => car.id === detail.id)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false)
    setOpenError(false)
  };

  return (
    <div className="w-full">
      <div className="w-full flex justify-between mb-4 lg:mb-9">
        <h2 className="text-xl lg:text-2xl font-bold select-none">{detail.name}</h2>
        {isLike >= 0 ? <button onClick={() => {
          likeDispatch({ type: "Un_Like", payload: detail })
          setOpenError(true)
        }} >
          <FcLike className="text-2xl mb-2" />
        </button> :
          <button onClick={() => {
            likeDispatch({ type: "Like", payload: detail })
            setOpenSuccess(true)
          }} >
            <FiHeart className="text-2xl text-gray-400 mb-2" />
          </button>}
      </div>
      <p className="text-sm lg:text-base text-gray-500 select-none max-w-[450px]">
        NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
      </p>
      <div className="w-full max-w-[450px]  gap-y-8 flex flex-wrap mt-4 lg:mt-8 select-none">
        <div className="w-1/2 pr-4 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Type Car</span>
          <p className="text-[12px] lg:text-sm text-gray-500">{detail.type}</p>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Capacity</span>
          <p className="text-[12px] lg:text-sm text-gray-500">{detail.anyPeople} Person</p>
        </div>
        <div className="w-1/2 pr-4 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Steering</span>
          <p className="text-[12px] lg:text-sm text-gray-500">{detail.steering}</p>
        </div>
        <div className="w-1/2 flex items-center justify-between">
          <span className="text-[12px] lg:text-sm text-gray-400/75">Gasoline</span>
          <p className="text-[12px] lg:text-sm text-gray-500">{detail.liter}L</p>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-6 lg:mt-8">
        <div>
          <span className="lg:text-xl flex items-center font-bold">${detail.price}/<p className="text-[12px] text-gray-500">day</p></span>
        </div>
        <Link to="/" className="hover:scale-95 outline-none duration-300 text-[12px] py-3 px-4 rounded lg:text-base text-white bg-blue-500">Rent Now</Link>
      </div>
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
    </div>
  );
}

export default DetailCar;