'use strict';
var TodoDispatcher = require('./TodoDispatcher'),
    ActionTypes = require('./TodoConstants');


module.exports = {
    addTask: function (task) {
        TodoDispatcher.handleServerAction({
            type: ActionTypes.ADD_TASK,
            data: task
        });
    },
    updateTask: function (task) {
        TodoDispatcher.handleServerAction({
            type: ActionTypes.UPDATE_TASK,
            data: task
        });
    },
    removeTask: function (index) {
        console.log("DDDDDDDDDDD", index);
        TodoDispatcher.handleServerAction({
            type: ActionTypes.REMOVE_TASK,
            data: index
        });
    }
};
