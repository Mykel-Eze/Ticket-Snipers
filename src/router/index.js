import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import Externals from '../Externals.vue'
import Auth from '../Auth.vue'
import Dashboard from '../Dashboard.vue'
import Overview from '../Overview.vue'

// External Pages
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pricing from '../views/Pricing.vue'
import HowItWorks from '../views/HowItWorks.vue'
import Tickets from '../views/Tickets.vue'

// More Pages with External Layouts
import SpeedingTicket from '../views/SpeedingTicket.vue'
import RedLightCamera from '../views/RedLightCamera.vue'
import GeneralTraffic from '../views/GeneralTraffic.vue'
import StopSignTicket from '../views/StopSignTicket.vue'
import RedLightTicket from '../views/RedLightTicket.vue'
import Cvc from '../views/Cvc.vue'
import ContactUs from '../views/ContactUs.vue'
import CourtHouses from '../views/CourtHouses.vue'
import County from '../views/County.vue'
import MediaBlog from '../views/MediaBlog.vue'
import MediaItem from '../views/MediaItem.vue'
import Press from '../views/Press.vue'
import Faq from '../views/Faq.vue'
import Resources from '../views/Resources.vue'

// Login/Signup, and other Authentication pages
import AuthPage from '../auth-views/AuthPage.vue'
import ResetPassword from '../auth-views/ResetPassword.vue'
import NewPassword from '../auth-views/NewPassword.vue'

// Dashboard Pages
import DashboardHome from '../dashboard-views/DashboardHome.vue'
import DashboardTickets from '../dashboard-views/DashboardTickets.vue'
import DashboardQuestionnaire from '../dashboard-views/DashboardQuestionnaire.vue'
import QuestionnaireForm from '../dashboard-views/QuestionnaireForm.vue'

const routes = [
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/',
    component: Externals,
    children: [
      {
        path: 'home',
        alias: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
      },
      {
        path: '/how-it-works',
        name: 'HowItWorks',
        component: HowItWorks
      },
      {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets
      },
      {
        path: '/speeding-ticket',
        name: 'SpeedingTicket',
        component: SpeedingTicket
      },
      {
        path: '/red-light-camera',
        name: 'RedLightCamera',
        component: RedLightCamera
      },
      {
        path: '/general-traffic',
        name: 'GeneralTraffic',
        component: GeneralTraffic
      },
      {
        path: '/stop-sign-ticket',
        name: 'StopSignTicket',
        component: StopSignTicket
      },
      {
        path: '/red-light-ticket',
        name: 'RedLightTicket',
        component: RedLightTicket
      },
      {
        path: '/cvc',
        name: 'Cvc',
        component: Cvc
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
      },
      {
        path: '/court-house',
        name: 'CourtHouses',
        component: CourtHouses
      },
      {
        path: '/county',
        name: 'County',
        component: County
      },
      {
        path: '/media',
        name: 'MediaBlog',
        component: MediaBlog
      },
      {
        path: '/media-item',
        name: 'MediaItem',
        component: MediaItem
      },
      {
        path: '/press',
        name: 'Press',
        component: Press
      },
      {
        path: '/faq',
        name: 'Faq',
        component: Faq
      },
      {
        path: '/resources',
        name: 'Resources',
        component: Resources
      }
    ]
  },
  {
    path: '/auth-page',
    component: Auth,
    children: [
      {
        path: '/login',
        alias: '',
        name: 'AuthPage',
        component: AuthPage
      },
      {
        path: '/reset-password',
        name: 'ResetPassword',
        component: ResetPassword
      },
      {
        path: '/new-password',
        name: 'NewPassword',
        component: NewPassword
      }
    ]
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '/dashboard/home',
        alias: '',
        name: 'DashboardHome',
        component: DashboardHome
      },
      {
        path: '/dashboard/tickets',
        name: 'DashboardTickets',
        component: DashboardTickets
      },
      {
        path: '/dashboard/questionnaire',
        name: 'DashboardQuestionnaire',
        component: DashboardQuestionnaire,
      },
      {
        path: '/dashboard/questionnaire/form',
        name: 'QuestionnaireForm',
        component: QuestionnaireForm
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
