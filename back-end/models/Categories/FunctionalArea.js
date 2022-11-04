import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";
const FunctionalArea = sequelize.define('FunctionalArea', {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});
export default FunctionalArea

// `sequelize.define` also returns the model