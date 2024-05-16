import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/Login.vue')
const MovieDetails = () => import('../views/MovieDetails.vue')
const Movies = () => import('../views/Movies.vue')
const SearchResult = () => import('../views/SearchResult.vue')
const Season = () => import('../views/Season.vue')
const StarDetails = () => import('../views/StarDetails.vue')
const Stars = () => import('../views/Stars.vue')
const List = () => import('../views/List.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:path(movies|tv-shows)',
      children: [
        {
          path: 'top-rated',
          component: Movies
        }
      ]
    },
    {
      path: '/movies',
      children: [
        {
          path: '',
          component: Movies
        },
        {
          path: ':path(now-playing|upcoming)',
          component: Movies
        },
        {
          path: ':movieId(\\d+)',
          component: MovieDetails
        }
      ]
    },
    {
      path: '/tv-shows',
      children: [
        {
          path: '',
          component: Movies
        },
        {
          path: ':path(airing-today|on-the-air)',
          component: Movies
        },
        {
          path: ':tvShowId(\\d+)',
          component: MovieDetails,
          children: [
            {
              path: 'season/:seasonId',
              component: Season
            }
          ]
        }
      ]
    },
    {
      path: '/u/:userName/:parentPath(ratings|watchlist|favorites)',
      children: [
        {
          path: ':childrenPath(movies|tv-shows)',
          component: List
        }
      ]
    },
    {
      path: '/people',
      children: [
        {
          path: '',
          component: Stars
        },
        {
          path: ':starId(\\d+)',
          component: StarDetails
        }
      ]
    },
    {
      path: '/search',
      component: SearchResult
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/:path(.*)',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
