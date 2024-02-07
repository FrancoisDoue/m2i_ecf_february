import { DataTypes } from "sequelize";

export default (sequelize) => {
    const User = sequelize.define( "User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(60),
            allowNull: false,
        }
    })


    return User
}