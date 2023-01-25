const wrapperNotification = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  }
}

export default wrapperNotification;