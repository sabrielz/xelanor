module.exports = app => {

	const Config = require('../controllers/config');

	app.get('/config', Config.all);

	app.get('/config/find/:key/:value?', Config.find);

	app.post('/config', Config.store);

	app.get('/config/migrate', Config.migrate);

	app.get('/config/seed', Config.seed);

	app.put('/config/:key/:value?', Config.update);

	app.delete('/config/:key/:value?', Config.destroy);

}