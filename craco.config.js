const CracoLessPlugin = require("craco-less");
const path = require("path");
const addPath = (dir) => path.join(__dirname, dir);
module.exports = {
    webpack:{
        alias:{
            "@":addPath("src")
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#1DA57A" },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    babel: {
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
    },
    devServer: {
        proxy: {
            '/api': {
                target: "http://47.98.235.103:6066",
                changeOrigin: true,
                secure: false,
                // rewrite: (path) => path.replace(/^\/api/, ''),
                // onProxyReq(proxyReq) {
                //     // 设置Cookie
                //     proxyReq.setHeader('Cookie', devProxyConfig.getCookie(DATA_ENV));
                // },
            },
        },
    }
};
