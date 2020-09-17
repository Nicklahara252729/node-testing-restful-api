'use strict';

module.exports = function(app) {
    var todoList      = require('../controllers/controller');
    var todoListUsers = require('../controllers/controller-users');

    app.route('/')
        .get(todoList.index);

    app.route('/users')
        .get(todoListUsers.users);

    app.route('/users/:id')
        .get(todoListUsers.usersById);
    
    app.route('/users')
        .post(todoListUsers.createUsers);

    app.route('/users')
        .put(todoListUsers.updateUsers);
    
    app.route('/users')
        .delete(todoListUsers.deleteUsers);
};