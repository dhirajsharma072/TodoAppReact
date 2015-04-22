'use strict';

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function (action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    },
    handleServerAction: function (action) {
        console.log(action, "dispacther");
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
