const path = require('path');

module.exports = {
    entry: './test/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.bundle.js'
    },
     mode: 'production'
    // mode: 'development'
}