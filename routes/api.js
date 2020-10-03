const registerController = require('../controller/registerController')
const listController = require('../controller/listController')

function initRoutes(app)
	{
    app.get('/register', registerController().register),
    app.get('/list', listController().list),
    app.post('/register', registerController().postregister)
	}

module.exports = initRoutes