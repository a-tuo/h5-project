const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

module.exports = function override(config, env) {
    // 配置别名
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve.alias,
            '@pages': resolve('src/pages'),
            // 添加更多别名
        },
    };

    return config;
};