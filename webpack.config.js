module.exports = {
    output: {
        path: __dirname + '/dist', // Output directory
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]', // Ensure assets are placed in 'dist/assets'
        clean: true, // Clean the output directory before building
    },
    // ...existing configuration...
};
