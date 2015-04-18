var React = require('react');
var List = require('./List.js');
var AddNewTask = require('./AddNewTask.js');
var TodoStore = require('../TodoStore');

var Todo = React.createClass({
    getInitialState: function () {
        return {
            tasks: TodoStore.getAll()
        };
    },
    componentWillMount: function () {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TodoStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({});
    },
    render: function () {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="spacing-bottom">Tasks</h2>
                    <List tasks={this.state.tasks} />
                </div>
                <AddNewTask addTask={this.addTask} tasks={this.state.tasks}/>

            </div>
        </div>;
    }
});

React.render(<Todo/>, document.getElementById('main'));
