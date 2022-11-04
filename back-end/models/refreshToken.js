import Sequelize from 'sequelize';
import sequelize from '../config/db.js';

const Refreshtoken = sequelize.define('refresh-token', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    token: Sequelize.STRING,
}
);
export default Refreshtoken


