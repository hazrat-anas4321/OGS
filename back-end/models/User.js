import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const User = sequelize.define('User', {
    // Model attributes are defined here
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    position: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});
export default User

// `sequelize.define` also returns the model