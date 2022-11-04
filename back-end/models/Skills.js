import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const Skill = sequelize.define('Skill', {
    // Model attributes are defined here
    skill_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skill_level: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    // Other model options go here
});
export default Skill

// `sequelize.define` also returns the model