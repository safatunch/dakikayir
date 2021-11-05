const mainPath = '/Venue'

const Layout = resolve => {
  require.ensure(['../Shared/Layout'], () => {
    resolve(require('../Shared/Layout'))
  })
}

const Detail = resolve => {
  require.ensure(['../Venue/Detail'], () => {
    resolve(require('../Venue/Detail'))
  })
}

const VenueRoutes = [{
  path: mainPath + '/:Id',
  name: 'VenueDetail',
  component: Detail,
  meta: { layout: Layout }
}
]

export default VenueRoutes
