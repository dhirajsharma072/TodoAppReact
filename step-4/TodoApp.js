/**
 * @jsx React.DOM
 */

var serverAction = window.serverAction;
var dd = "a href=  className=list-group-item>taska>";
var styleObject = {
    'listStyleType': 'none'
};

var List = React.createClass({
    getInitialState: function () {
        return {
            list: this.props.tasks
        };
    },
    render: function () {
        var tasksList = this.state.list;
        return (<div className="list-group" style={styleObject} >{
            tasksList.map(function (task,index) {
                return (
                    <div className="input-group">
                        <span className="input-group-addon">
                            <input type="checkbox" aria-label="..."/>
                        </span>
                        <a href="#" className="form-control"  aria-label="..." >{task}</a>
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-default" data-toggle="dropdown" aria-expanded="false" onClick={this._delete}>Delete</button>
                        </div>
                    </div>
                )
            })
            }</div>);
    },
    _delete: function (evnt) {
        this.props.removeTask(task);
    }

});

var Todo = React.createClass({
    getInitialState: function () {
        return {
            tasks: ["Say Hello Ninja", "Play with react state", "Play with react props"]
        };
    },
    addTask: function (item) {
        this.setState(function () {
            this.state.tasks.push(item)
        });

    },
    removeTask: function (index) {
        this.setState(function () {
            this.state.tasks.splice(index,1);
        });
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

var AddNewTask = React.createClass({
    addNewTask: function () {
        var task = "";
        task = this.refs.newTask.getDOMNode().value;
        console.log(task);
        this.props.addTask(task);
        this.refs.newTask.getDOMNode().value = "";
    },
    render: function () {
        return (
            <div className="col-lg-6 spacing-bottom">
                <h2>What to do</h2>
                <div className="input-group">
                    <input type="text" ref="newTask" className="form-control" placeholder="Write here..." />
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-default" data-toggle="dropdown" aria-expanded="false" onClick={this.addNewTask}>Add</button>
                    </div>
                </div>
            </div>
        );
    }

});

React.render(<Todo/>, document.getElementById('main'));
