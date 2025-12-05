import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// Lazy load components
const Home = () => import('./components/Home.vue')
const About = () => import('./components/Abouts.vue')
const ProductDetails = () => import('./components/ProductDetails.vue')
const NotFound = () => import('./components/NotFound.vue')
const ProductSearch = () => import('./components/ProductSearch.vue')
const User = () => import('./components/User.vue')
const UserProfile = () => import('./components/UserProfile.vue')
const UserOrder = () => import('./components/UserOrder.vue')
const UserWishlist = () => import('./components/UserWishlist.vue')
const UserHeader = () => import('./components/UserHeader.vue')
const UserOrderFooter = () => import('./components/UserOrderFooter.vue')
const UserWishlistFooter = () => import('./components/UserWishlistFooter.vue')

// Router
const router = createRouter({
  // router options here
  routes: [
    {
        path: '/',
        component: Home,
        props: { 
            title: 'Welcome to the Home Page!'
        }
    },
    {
        path: '/about',
        component: About,
        sensitive: true
    },
    // Redirect route
    {
        path: '/home',
        redirect: '/'
    },
    {
        // productsearch route
        path: '/products/search',
        component: ProductSearch,
        name: 'product-search',
        props: route => ({ product: route.query.product })
    },
    // redirect product search
    {
        path: '/products/search/:keyword',
        redirect: to => {
            return { name: 'product-search', query: { product: to.params.keyword } }
        }
    },
    {
        path: '/products/:id(\\d+)?',
        component: ProductDetails,
        // props: true
        props: route => ({ id: route.params.id ? Number(route.params.id) : null })
    },
    // Path for user and it childern routes
    {
        path: '/user',
        component: User,
        children: [
            {
                path: '',
                name: 'user',
                components: {
                    default: UserProfile,
                    header: UserHeader,
                }
            },
            {
                path: 'profile',
                name: 'user-profile',
                components: {
                    default: UserProfile,
                    header: UserHeader,
                }
            },
            {
                path: 'order',
                name: 'user-order',
                components: {
                    default: UserOrder,
                    header: UserHeader,
                    footer: UserOrderFooter,
                }
            },
            {
                path: 'wishlist',
                name: 'user-wishlist',
                components: {
                    default: UserWishlist,
                    header: UserHeader,
                    footer: UserWishlistFooter,
                }
            }
        ],
        beforeEnter: (to, from, next) => {
            console.log('Route-specific beforeEnter:')
            console.log('Navigating to user route:', to.fullPath)
            next()
        }
    },
    // not found route
    {
        path: '/:notfound*',
        component: NotFound,
        beforeEnter: (to, from, next) => {
            console.log('Route-specific beforeEnter:')
            console.log('Trying to access a non-existing route:', to.fullPath)
            next()
        }
    },
],
  history: createWebHistory(), // createWebHistory is for HTML5 history mode
    // history: createWebHashHistory(), // createWebHashHistory is for hash mode
    // history: createMemoryHistory(), // createMemoryHistory is for server-side rendering (SSR)
})

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach:')
    console.log('Navigating to:', to.fullPath)
    console.log('Navigating from:', from.fullPath)
    next()
})

router.afterEach((to, from) => {
    console.log('Global afterEach:')
    console.log('Successfully navigated to:', to.fullPath)
    console.log('Successfully navigated from:', from.fullPath)
})

createApp(App).use(router).mount('#app')
