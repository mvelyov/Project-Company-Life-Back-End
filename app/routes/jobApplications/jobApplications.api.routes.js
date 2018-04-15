const {
    Router,
} = require('express');

const JobApplicationsController = require('./jobApplications.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobApplicationsController(data);
    app.use('/api', router);

    router
    .get('/jobapplications/:id', async (req, res) => {
        const id = req.params.id;
        const jobApplications = await controller.getAllJobApplications(id);
        res.send(jobApplications);
    });
};

module.exports = {
    init,
};