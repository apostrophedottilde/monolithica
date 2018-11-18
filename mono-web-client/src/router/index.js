import Vue from 'vue'
import Router from 'vue-router'
import BrowseListingsPage from '../components/pages/BrowseListingsPage'
import NewListingPage from '@/components/pages/NewListingPage'
import SingleListingPage from '@/components/pages/SingleListingPage'
import UserRegistrationPage from '@/components/pages/UserRegistrationPage'
import LoginPage from '@/components/pages/LoginPage'
import LiveChatWindow from '@/components/LiveChatWindow'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BrowseListingsPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
      path: '/user-registration',
      name: 'UserRegistrationPage',
      component: UserRegistrationPage
    },
    {
        path: '/chat',
        name: 'LiveChatWindow',
        component: LiveChatWindow
    },
    {
      path: '/new-listing',
      name: 'NewListingPage',
      component: NewListingPage
    },
    {
      path: '/listings',
      name: 'BrowseListingsPage',
      component: BrowseListingsPage
    },
    {
      path: '/listings/:listingId',
      name: 'SingleListingPage',
      component: SingleListingPage,
      props: true
    }
  ]
})
