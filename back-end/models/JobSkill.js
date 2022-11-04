import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import Job from "./Job.js";
import Skill from "./Skills.js";

const JobSkill = sequelize.define('JobSkill', {
    JobId: {
        type: DataTypes.INTEGER,
        references: {
            model: Job,
            foreignkey: 'id'
        }
    },
    SkillId: {
        type: DataTypes.INTEGER,
        references: {
            model: Skill,
            foreignkey: 'id'
        }

    }
});
export default JobSkill