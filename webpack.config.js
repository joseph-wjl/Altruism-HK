module.exports = {
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]', // Ensure assets are placed in 'dist/assets'
    },
    // ...existing configuration...
};
