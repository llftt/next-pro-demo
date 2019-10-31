const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const commandLine = require('command-line-args');

const routes = require('./routes');


const optionDefinitions = [{ name: 'port', alias: 'p', type: Number, defaultValue: 3000 }];

const options = commandLine(optionDefinitions);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
	createServer((req, res) => {
		console.log(`req.url:${req.url}`)
		
		console.log('-----------------------')
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;
			if (pathname.indexOf('ttf') > 0 || pathname.indexOf('woff') > 0) {
				res.setHeader('Access-Control-Allow-Origin', '*');
			}
			if (pathname.indexOf('static') > 0) {
				res.setHeader('Cache-Control', 'public');
			}
			//自定义server
			if(pathname === '/a'){
				app.render(req, res, '/a', query)
			}else if(pathname === '/api/test'){
				console.log(`${pathname}`)
				res.setHeader('Content-Type', 'application/json')
				res.end(JSON.stringify({"test":"test"}))
			}else{
				handler(req, res, parsedUrl);
			}
	}).listen(options.port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${options.port}`);
	});
});
