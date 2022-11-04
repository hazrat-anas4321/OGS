import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Degree = sequelize.define('Degree', {
    // Model attributes are defined here
    degree_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
    // Other model options go here
});
export default Degree

// `sequelize.define` also returns the model