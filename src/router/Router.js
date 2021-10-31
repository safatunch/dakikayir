import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Index = resolve => {
  require.ensure(['../screens/Home/Index'], () => {
    resolve(require('../screens/Home/Index'))
  })
}

const VenueDetail = resolve => {
  require.ensure(['../screens/Venue/Detail'], () => {
    resolve(require('../screens/Venue/Detail'))
  })
}

const Layout = resolve => {
  require.ensure(['../screens/Shared/Layout'], () => {
    resolve(require('../screens/Shared/Layout'))
  })
}

const EmptyLayout = resolve => {
  require.ensure(['../screens/Shared/EmptyLayout'], () => {
    resolve(require('../screens/Shared/EmptyLayout'))
  })
}

const Login = resolve => {
  require.ensure(['../screens/Account/Login'], () => {
    resolve(require('../screens/Account/Login'))
  })
}

const Register = resolve => {
  require.ensure(['../screens/Account/Register'], () => {
    resolve(require('../screens/Account/Register'))
  })
}

export const router = new VueRouter({
  routes: [{
    component: Index,
    name: 'Index',
    path: '/',
    meta: { layout: Layout }
  },
  {
    path: '/Venue/:Id',
    name: 'VenueDetail',
    component: VenueDetail,
    meta: { layout: Layout, requiresAuth: true }
  },
  {
    path: '/Account/Register',
    component: Register,
    meta: { layout: EmptyLayout }
  },
  {
    path: '/Account/Login',
    component: Login,
    meta: { layout: EmptyLayout }
  }
  ],
  mode: 'history'
})
