var React = require('react');
var TodoActionCreator = require('../TodoActionCreator');

var AddNewTask = React.createClass({
    addNewTask: function () {
        var task = "";
        task = this.refs.newTask.getDOMNode().value;
        TodoActionCreator.addTask(task);
    },
    render: function () {
        return (
            <div className="col-lg-6 spacing-bottom">
                <h2>What to do</h2>
                <div className="input-group">
                    <input type="text" ref="newTask" className="form-control" placeholder="Write here..." />
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-default" aria-expanded="false" onClick={this.addNewTask}>Add</button>
                    </div>
                </div>
            </div>
        );
    }

});

module.exports = AddNewTask;
