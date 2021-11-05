import VueRouter from 'vue-router'
import Vue from 'vue'
import VenueRoutes from '../screens/Venue/Routes'

Vue.use(VueRouter)

const Index = resolve => {
  require.ensure(['../screens/Home/Index'], () => {
    resolve(require('../screens/Home/Index'))
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
const ErrorLayout = resolve => {
  require.ensure(['../screens/Shared/ErrorLayout'], () => {
    resolve(require('../screens/Shared/ErrorLayout'))
  })
}

const NotFound = resolve => {
  require.ensure(['../screens/Error/NotFound'], () => {
    resolve(require('../screens/Error/NotFound'))
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
  routes: [...VenueRoutes, {
    component: Index,
    name: 'Index',
    path: '/',
    meta: { layout: Layout }
  },
  {
    path: '/Account/Register',
    component: Register,
    meta: { layout: EmptyLayout, disableIfLoggedIn: true }
  },
  {
    path: '/Account/Login',
    component: Login,
    meta: { layout: EmptyLayout, disableIfLoggedIn: true }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: { layout: ErrorLayout }
  }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.meta.disableIfLoggedIn) {
    return router.push('/')
  }
  return next()
})
