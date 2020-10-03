const User = require('../models/user')


function registerController() {
    return {
        async register(req, res) {
            return res.render('register')
        },
        async postregister(req, res) {
            const {name, number, email, address, city, state, zip} = req.body
           
            //validation
            /*if(!name){
            	return res.redirect('/')
            }
            else{*/
            const hello = new User({
             name, 
             number,
              email, 
              address, 
              city, 
              state, 
              zip
         })
            
            hello.save().then((hello) => {
            return res.redirect('/')
         }).catch(err => {
                return res.redirect('/register')
         })

        }
       
    }
}


module.exports = registerController