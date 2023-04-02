'use strict';
const uuid = require('uuid');
module.exports = {
    async up(queryInterface, DataTypes) {
        await queryInterface.bulkInsert(
            'firms',
            [
                {
                    uuid: uuid.v4(),
                    name: 'Default Firm',
                    nr: 0,
                    api_key: uuid.v4(),
                    active: true,
                    created_at: DataTypes.fn('now'),
                    updated_at: DataTypes.fn('now'),
                },
            ],
            {}
        );
    },

    async down(queryInterface) {
        await queryInterface.bulkDelete('firms', null, {});
    },
};
