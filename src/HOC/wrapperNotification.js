import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const WrapperNotification = (WrappedComponent) => {

  return (props) => {

    const options = {
      position: "top-center",
      icon: true,
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    }

    const handleSuccess = (massage) => toast.success(massage, options);
    const handleError = (massage) => toast.error(massage, options);

    return (
      <>
        <WrappedComponent error={handleError} success={handleSuccess} {...props} />
        <ToastContainer />
      </>
    )
  }
}

export default WrapperNotification;