import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Task = sequelize.define( "Task", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        priority: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        progress: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    })

    

    return Task
}