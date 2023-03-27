'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Firms extends Model {
        static associate(models) {
            // define association here
        }
        toJSON() {
            return {
                ...this.get(),
                id: undefined,
            };
        }
    }
    Firms.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
                required: true,
            },
            name: {
                type: Sequelize.STRING,
                required: true,
            },
            nr: {
                type: Sequelize.INTEGER,
                unique: true,
                required: true,
            },
            api_key: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
                required: true,
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: 'Firms',
            tableName: 'firms',
            underscored: true,
        }
    );
    Firms.includeAttributes = ['uuid', 'name', 'nr', 'active'];
    return Firms;
};
