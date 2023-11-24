const express = require('express')
const router = express.Router()


//ROUTES
const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const articlesRoutes = require('./articles.route')

const routesIndex = [
   {
   	  path:'/auth',
   	  route:authRoute
   },
   {
    path:'/users',
    route: userRoute
   },
   {
    path:'/articles',
    route:articlesRoutes
   }
   
]

routesIndex.forEach((route)=>{
  router.use(route.path,route.route)
})






module.exports = router