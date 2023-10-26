const {User, UserSchema } = require('./user.model')
const {Area, AreaSchema} = require('./area.model')
const {Planner, PlannerSchema} = require('./planner.model')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    User.associate(sequelize.models)
    Area.init(AreaSchema, Area.config(sequelize))
    Area.associate(sequelize.models)
    Planner.init(PlannerSchema, Planner.config(sequelize))
    Planner.associate(sequelize.models)
}

module.exports = setupModels