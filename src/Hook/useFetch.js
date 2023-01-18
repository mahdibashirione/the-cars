import { useEffect, useState } from "react";
import http from "../services/httpServices"

const useFetch = (url) => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    setLoading(true)
    http.Get(url).then(res => {
      setLoading(false)
      setData(res.data)
    }).catch(error => {
      setLoading(false)
      setError(error)
    })
  }, [url])

  return { data, loading, error };
}

export default useFetch;