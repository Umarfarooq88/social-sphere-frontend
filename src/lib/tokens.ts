import {setCookie, getCookie, deleteCookie} from 'cookies-next'

export  function setAccessToken(token: string) {
    setCookie("accessToken", token)
  }
  
  export  function getAccessToken() {
    return getCookie("accessToken")
  }
  
  export  function deleteAccessToken(){
    deleteCookie("accessToken")
  }
  export  function setRefreshToken(token: string) {
    setCookie("refreshToken", token)
  }
  
  export  function getRefreshToken() {
    return getCookie("refreshToken")
  }
  
  export  function deleteRefreshToken(){
    deleteCookie("refreshToken")
  }