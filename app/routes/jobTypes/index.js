const apiRoutes = require('./jobTypes.api.routes');

const init = (app, data) => {
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};
