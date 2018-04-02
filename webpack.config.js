module.exports = {
    entry : ['./src/index.js'],

    output : {
        path : __dirname,
        publicPath : '/',
        filename : 'bundle.js'
    },

    module : {
        loaders : [{
            loader : 'babel-loader',
            exclude : '/node_modules/',
            query : {
                presets : ['react', 'es2015']
            }
        }]
    }

}