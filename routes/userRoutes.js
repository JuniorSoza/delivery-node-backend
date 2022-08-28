const UsersController = require('../controllers/usersController');

module.exports = (app) =>{

    app.get('/api/users/getAll', UsersController.getAll);

    app.post('/api/users/create', UsersController.register);

}


/**
 * 
 * 
        {
            "email": "junior_soza@gmail.es",
            "name": "dayanna",
            "lastname": "ramirez",
            "phone": "099999949",
            "image": "qq",
            "password": "April08012021",
            "is_available": true,
            "session_token": "kk"
        }
 * 
 * 
 */