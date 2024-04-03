import {setCookie, getCookie, deleteCookie} from 'cookies-next'

function setAccessToken(token: string) {
    setCookie("accessToken", token)
}
  
function deleteAccessToken(){
    deleteCookie("accessToken")
}

function setRefreshToken(token: string) {
    setCookie("refreshToken", token)
}
  
function deleteRefreshToken(){
    deleteCookie("refreshToken")
}

function setUserEmail(email:string){
    setCookie("userEmail",email)
}

function setUserId(userId:string){
    setCookie("userId",userId)
}

export function setUserCookies(user:any){
    setAccessToken(user.accessToken)
    setRefreshToken(user.refreshToken)
    setUserEmail(user.email)
    setUserId(user.userId)
}

export function deleteUserCookies(){
    deleteAccessToken()
    deleteRefreshToken()
    deleteCookie("userEmail")
    deleteCookie("userId")
}

export function getAccessToken() {
    return getCookie("accessToken")
}


export function getRefreshToken() {
    return getCookie("refreshToken")
}
  
export function getUserEmail(){
  return getCookie("userEmail")
}
export function getUserId(){
  return getCookie("userId")
}

export function isAccessTokenExpired(){
    return !getAccessToken()
}