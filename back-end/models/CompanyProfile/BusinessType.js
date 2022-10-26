
import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";
const BusinessType = sequelize.define('business_type', {
    // Model attributes are defined here
    business_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    // Other model options go here
});
export default BusinessType


