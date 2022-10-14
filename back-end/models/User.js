import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});
export default User
console.log("hdf")
// `sequelize.define` also returns the model

