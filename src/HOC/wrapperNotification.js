import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const WrapperNotification = (WrappedComponent) => {

  const NewComponent = (props) => {

    const theme = useSelector(store => store.theme)

    const options = {
      duration: 1500,
      style: {
        background: theme === "dark" && '#333',
        color: theme === "dark" && '#fff',
      },
    }

    const handleSuccess = (message) => toast.success(message, options)
    const handleError = (massage) => toast.error(massage, options);

    return (
      <>
        <WrappedComponent error={handleError} success={handleSuccess} {...props} />
        <Toaster />
      </>
    )
  }

  return NewComponent;
}

export default WrapperNotification;