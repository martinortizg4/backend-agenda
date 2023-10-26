const {Router} = require('express')
const userRouter = require('./users.routes')
const areaRouter = require('./area.routes')
const plannerRouter = require('./planner.routes')

function routerApi(app){
    const router = Router()

    app.use ('/api/v1' ,router)
    router.use('/users', userRouter)
    router.use('/area',areaRouter)
    router.use('/planner',plannerRouter)
}

module.exports = routerApi