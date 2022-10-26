import sequelize from "../../config/db.js";
import { DataTypes } from "sequelize";
const Company = sequelize.define('company', {
    // Model attributes are defined here
    company_name: {
        type: DataTypes.STRING
    },
    company_logo: {
        type: DataTypes.STRING
    },
    business_webpage: {
        type: DataTypes.STRING
    },
    business_mobile_number: {
        type: DataTypes.STRING
    },
    business_address: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    contact_person_name: {
        type: DataTypes.STRING
    },
    contact_person_number: {
        type: DataTypes.STRING
    },
    contact_person_email: {
        type: DataTypes.STRING
    }
}, {
    // Other model options go here
});
export default Company

// `sequelize.define` also returns the model