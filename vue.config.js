module.exports = {
    publicPath: process.env.NODE_ENV == 'production' ? 'https://www.vivabeauty.com.br/tema/vivabeauty-vue/dist' : '/',
    devServer: {
        port: 8080,
    },
};