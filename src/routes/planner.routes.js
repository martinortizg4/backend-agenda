const {Router} = require('express')
const PlannerController = require ('./../controllers/planner.controller')

const router = Router()


const controller = new PlannerController()

router.get('/', async (req, res)=>{
    const planners = await controller.index()
    res.json({planners})
})
router.post('/', async (req, res)=>{
    const {date, hour_start,hour_end,user,place, status} = req.body
    const planner = await controller.create(date, hour_start, hour_end,user,place, status)
    res.status(201).json({planner})
})
router.get('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const planner = await controller.findOne(id)
        res.status(200).json({planner})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
router.put('/:id', async (req, res)=>{
    const {id} = req.params
    const {date='',hour_start='',status='',hour_end='',user='',place=''} = req.body
    const values = {}
    if(date) values.date = date
    if(hour_start) values.hour_start = hour_start
    if(status) values.status= status
    if(hour_end) values.hour_end= hour_end
    if(user) values.user= user
    if(place) values.place=place
    try {
        const planner = await controller.update(id, values)
        res.status(200).json({planner})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
})
router.delete('/:id', async (req, res)=>{
    const {id} = req.params

    try {
        const planner = await controller.delete(id)
        res.status(200).json({planner})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = router