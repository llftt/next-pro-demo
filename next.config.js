// next.config.js
const path = require('path');
// 处理import scss文件
const withLess = require('@zeit/next-less');
const webpack = require('webpack');

//const isProd = process.env.NODE_ENV === 'production';
const isDev = process.env.API === 'development';
const isProd = !isDev;
console.log('env', process.env.NODE_ENV, process.env.API, isDev);

if(typeof require !== "undefined"){
	require.extensions[".scss"] = file => {}
}
module.exports = withLess({
	/* config options here */
	//antd样式打包打包增加配置，fix .bezierEasingMixin() Inline JS is not enabled error
	lessLoaderOptions: {
		javascriptEnabled: true
	  },
	assetPrefix: isProd ? '' : '',
	distDir: 'dist',
	webpack: function(config, { isServer }) {
		// 设置别名
		config.resolve.alias = Object.assign(config.resolve.alias, {
			'@components': path.resolve(__dirname, 'components'),
			'@config': path.resolve(__dirname, 'config'),
			'@utils': path.resolve(__dirname, 'utils'),
			'@static': path.resolve(__dirname, 'static'),
			'@images': path.resolve(__dirname, 'static/images'),
			'@styles': path.resolve(__dirname, 'static/styles'),
		});
		// 配置file-loader
		// https://github.com/zeit/next.js/blob/0f6cff88bc9e587e9a0b14262066cb0f59dc32d0/packages/next/build/webpack.js
		config.module.rules.push({
			test: /\.(png|jpe?g|gif|svg|eot|woff|ttf|webp|svga)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: isProd ? '[path][name].[hash:4].[ext]' : '[path][name].[ext]?[hash:4]',
					publicPath: isProd ? '/' : '/'
				}
			}
		});
		// hashModulesId
		config.plugins.push(new webpack.HashedModuleIdsPlugin());

		// polyfills.js
		// https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
		const originalEntry = config.entry;
		config.entry = async () => {
			const entries = await originalEntry();

			if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
				entries['main.js'].unshift('./polyfills.js');
			}

			return entries;
		};
		//新版中 css-loader 和 webpack 会出现这样一个错误,这是升级过程中代码变更导致了,css-loader 已经没有 minimize 这一选项
		console.warn("HACK: Removing `minimize` option from `css-loader` entries in Webpack config");
		config.module.rules.forEach(rule=>{
			if(Array.isArray(rule.use)){
				rule.use.forEach(u=>{
					if(u.loader === "css-loader" && u.options){
						delete u.options.minimize
					}
				})
			}
		})
		return config;
	},
	generateBuildId: async () => {
		// For example get the latest git commit hash here
		return 'v1'
	}
	
});

// accessible to both client and server-side
const publicRuntimeConfig = {
	isDev: isDev,
	assetPrefix: isProd ? '' : ''
};

module.exports.publicRuntimeConfig = publicRuntimeConfig;
module.exports.useFileSystemPublicRoutes = false;
