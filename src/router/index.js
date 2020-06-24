export default [
  {
    path: '/login',
    component: '@/pages/login'
  },
  {
    path: '/',
    component: '@/layouts/index.jsx',
    routes: [
      { path: '/', component: '@/pages/home' },
      { path: '/about', component: '@/pages/about' },
    ],
  },
]

