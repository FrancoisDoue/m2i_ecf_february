import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Project = sequelize.define( "Project", {
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
        }
    })


    return Project
}