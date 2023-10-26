'use strict';

const { DataTypes } = require('sequelize');
const { PLANNER_TABLE } =  require('./../models/planner.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PLANNER_TABLE, {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date:{
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
      },
      hour_start:{
        type: Sequelize.DataTypes.TIME,
      
        allowNull: false,
        unique: true
      },
      hour_end:{
        type: Sequelize.DataTypes.TIME,
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
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    })
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PLANNER_TABLE);
  },
};
