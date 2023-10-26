const {models} = require('./../libs/sequelize')

class PlannerService{
    constructor(){
        this.model = models.Planner
    }

    async getAll(){
        const planners = await this.model.findAll()
        return planners
    }
    async create(date, hour_start, hour_end, user, place, status){
        const planner = await this.model.create({date, hour_start, hour_end,user,place, status})
        return planner
    }
    async findOne(id) {
        const planner = await this.model.findByPk(id)
        return planner
    }
    async update(id, values){
        const planner = await this.findOne(id)
        if(!planner)return null 
        const updatePlanner = await planner.update(values)
        return updatePlanner
    }
    async delete(id){
        const planner = await this.findOne(id)
        if(!planner) return null 
        await planner.destroy()
        return planner.id
    }
}
module.exports = PlannerService