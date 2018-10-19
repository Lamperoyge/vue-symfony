var Encore = require('@symfony/webpack-encore');
var path = require('path');
Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('list', './assets/js/Pages/list.js')
    //.addEntry('page2', './assets/js/page2.js')
    
    
    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables Sass/SCSS support
    .enableSassLoader()
    .enableVueLoader()
    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()var config = Encore.getWebpackConfig();
    var config = Encore.getWebpackConfig();
    config.resolve = {
        'extensions': ['.js', '.vue'],
        alias: {
            'auto-complete-vue': path.resolve(__dirname, './assets/js/Components/AutoComplete.js'),
            'custom-list-vue': path.resolve(__dirname, './assets/js/Components/List.js'),
             'vue': 'vue/dist/vue.js'
        }
    };
    config.watchOptions = { poll: 1000, aggregateTimeout: 300 };
    config.devServer = {
        port: 8080,
        host: '0.0.0.0',
        hot: true
    };

module.exports = config;
