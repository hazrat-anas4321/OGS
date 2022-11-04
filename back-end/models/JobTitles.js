import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const JobTitle = sequelize.define('JobTitle', {
    job_title: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {
});
export default JobTitle

