module.exports = {
    entry : './views/client.jsx',
    output:{
        filename : 'bundle.js',
        path :__dirname + '/public/js'
    },
    module:{
        loaders:[
            {
                test :/.jsx?$/,
                exclude:/node_modules/,
                loader : 'babel-loader',
                query:{
                    presets:['react']
                }
            }
        ]
    }
}