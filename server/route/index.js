let qq = require("./qq/qq");
module.exports = function(app) {
    app.use('/api', qq);
};
