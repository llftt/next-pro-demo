/*
 * @Description: next的路由
 * @doc https://github.com/fridays/next-routes
 */
const routes = require('next-routes');

/**
 * add(name, pattern=/name, page=name)
 */
module.exports = routes()
	.add('/', '/', 'index')
	.add('index')
	.add('about')
	.add('category', '/category/:gametype', 'category')
