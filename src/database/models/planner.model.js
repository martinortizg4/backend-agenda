const { DataTypes, Model } = require ('sequelize')

const PLANNER_TABLE = 'planner'

const PlannerSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date:{
        type:DataTypes.DATEONLY,
        allowNull: false
    },
    hour_start:{
        type:DataTypes.TIME,
        allowNull: false,
        
    },
    hour_end:{
        type:DataTypes.TIME,
        allowNull: false
    },
    user:{
        type:DataTypes.STRING,
        allowNull: false
    },
    place:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
} 

class Planner extends Model{
    static associate(models){

    }
    static config(sequelize){
        return {sequelize, tableName: PLANNER_TABLE, modelName: 'Planner', timestamps:false}
    }
}

module.exports = {PLANNER_TABLE, PlannerSchema, Planner}