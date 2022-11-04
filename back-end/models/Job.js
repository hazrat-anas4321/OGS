import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Job = sequelize.define('Job', {
    // Model attributes are defined here
    job_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    end_salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'both']
    },
    valid_upto: {
        type: DataTypes.DATE
    },
    is_active: {
        type: DataTypes.BOOLEAN
    },
    location: {
        type: DataTypes.STRING
    },

}, {
});
export default Job

// `sequelize.define` also returns the model