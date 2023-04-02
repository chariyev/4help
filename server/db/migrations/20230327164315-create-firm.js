'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.createTable('firms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                unique: true,
                required: true,
            },
            name: {
                type: DataTypes.STRING,
                required: true,
            },
            nr: {
                type: DataTypes.INTEGER,
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
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, DataTypes) {
        await queryInterface.dropTable('firms');
    },
};
