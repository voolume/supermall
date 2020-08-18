import axios from 'axios'

export default (reqConfig)=>{
  const axiosInstanse = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 3000
  })

  axiosInstanse.interceptors.request.use(
    config=>{
      return config
    },
    err=>{
      return err
    }
  )

  axiosInstanse.interceptors.response.use(
    res=>{
      return res.data
    },
    err=>{
      return err
    }
  )
  
  return axiosInstanse(reqConfig)
}
