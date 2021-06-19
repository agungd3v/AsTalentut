import { getCookies } from '../helpers/authentication'
import * as Cookies from 'js-cookie'

export default function (context) {
  let getCookie
  if (process.server) {
    let cookie = decodeURI(getCookies('vuex', context.req.headers.cookie))
    if (cookie) {
      getCookie = JSON.parse(cookie.split('%2C').join(','))
      if (!getCookie) {
        return context.redirect('/login')
      }
      context.store.commit('setToken', getCookie.token)
    }
  } else {
    let getCookie = Cookies.get('vuex')
    if (!getCookie) {
      return context.redirect('/login')
    }
  }
}