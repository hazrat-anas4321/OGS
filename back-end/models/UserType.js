
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const UserType = sequelize.define('user_type', {
    // Model attributes are defined here
    user_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});
export default UserType


