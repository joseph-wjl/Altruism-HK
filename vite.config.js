export default {
    build: {
        outDir: 'dist', // Output directory
        assetsDir: 'assets', // Ensure assets are placed in 'dist/assets'
        emptyOutDir: true, // Clean the output directory before building
    },
    assetsInclude: ['**/*.JPG'], // Include .JPG files as assets
};