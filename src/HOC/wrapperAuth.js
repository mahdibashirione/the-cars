import { createBrowserHistory } from "@remix-run/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { signIn } from "../redux/auth/authActions"
import { Sign_In } from "../redux/auth/authType"
import http from "../services/httpServices"

const WrapperAuth = (ComponentWrapped) => {

  const NewComponent = (props) => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const history = createBrowserHistory()


    async function postDataUser(url, dataUser) {
      setLoading(true)
      setError(null)
      try {
        const { data } = await http.Post(url, dataUser)
        setLoading(false)
        history.push("/")
        dispatch(signIn({ type: Sign_In, payload: data }))
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }

    return <ComponentWrapped
      {...props}
      dataFetching={{ loading, error, data }}
      postData={postDataUser}
    />
  }

  return NewComponent;

}

export default WrapperAuth;