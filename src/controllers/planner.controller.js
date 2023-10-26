const PlannerService = require('./../services/planner.service')

class PlannerController{
    constructor(){
        this.service = new PlannerService()
    }

    async index(){
        const planners = await this.service.getAll()
        return planners
    }

        async create(date, hour_start, hour_end,user, place, status){
        const planner = await this.service.create(date, hour_start, hour_end,user,place, status)
        return planner
    }


    async findOne(id){
    
        const planner =  await this.service.findOne(id)
        
        if(!planner){
        
            throw new Error('Planner dont find')
        }
        return planner
    }
    async update(id, values){
        const planner = await this.service.update(id,values)

         if(!planner){
            throw new Error('Planner dont find')
         }
         return planner
    }

    async delete(id){
        const planner = await this.service.delete(id)
        if(!planner){
            throw new Error('Planner dont find')
        }
        return planner
    }
}

module.exports = PlannerController