const path = require('path');

module.exports = {
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/cafetal-restaurant/'
    },
    scripts: {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
};
