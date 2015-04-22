'use strict';

var AppDispatcher = require('./TodoDispatcher');
var ActionTypes = require('./TodoConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _todo = ["Say Hello Ninja", "Play with react state", "Play with react props"];

function updateTask(key) {

}

function addTask(task) {
    _todo.push(task.data);
}
function deleteTask(payload) {
    console.log(payload);
    _todo.splice(payload.data, 1);
}


var TodoStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    confirmationUserCreated: function () {
        return User.isCreated;
    },
    getAll: function () {
        return _todo;
    }
});

AppDispatcher.register(function (payload) {
    switch (payload.action.type) {
        case ActionTypes.ADD_TASK:
            addTask(payload.action);
            TodoStore.emitChange();
            break;
        case ActionTypes.REMOVE_TASK:
            console.log(payload, "store");

            deleteTask(payload.action);
            TodoStore.emitChange();
            break;
        default:
    }

    return true;
});

module.exports = TodoStore;
