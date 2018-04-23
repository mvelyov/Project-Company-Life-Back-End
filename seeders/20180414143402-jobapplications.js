'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('jobapplications', [{
            userId: 2,
            title: 'Senior NodeJS Developer',
            firstName: 'John',
            lastName: 'Doe',
            cv: 'cv download link',
            email: 'mmurray@abv.bg',
            jobId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            userId: 2,
            title: 'Senior Developer',
            firstName: 'John',
            lastName: 'Doe',
            comment: 'added comment',
            cv: 'cv download link',
            coverLetter: 'cover letter download link',
            email: 'mmurray@abv.bg',
            jobId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },
};