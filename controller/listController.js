const user = require('../models/user')

function listController() {
    return {
        async list(req, res) {
        	/*const hello = await User.findById(req.id)
        	return res.render('list', { hello })*/
            //return res.render('list')
            const hello = await user.find()
            return res.render('list', { hello: hello })
        }
    }
}

module.exports = listController