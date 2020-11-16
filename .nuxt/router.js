import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47f1cb1e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _2de331d3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _e2895e16 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _b35c8f96 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _95b541d2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _3c22f161 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _e5c808fc = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _47f1cb1e,
    children: [{
      path: "",
      component: _2de331d3,
      name: "home"
    }, {
      path: "/login",
      component: _e2895e16,
      name: "login"
    }, {
      path: "/register",
      component: _e2895e16,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _b35c8f96,
      name: "profile"
    }, {
      path: "/settings",
      component: _95b541d2,
      name: "settings"
    }, {
      path: "/editor",
      component: _3c22f161,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _e5c808fc,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
