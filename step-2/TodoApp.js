"use strict";

var Todo = React.createClass({
    /* getInitialState: function () {
     return {
     todos: []
     }
     },

     componentWillMount: function () {
     emitter.on(constants.changed, function (todos) {
     this.setState({todos: todos});
     }.bind(this));
     },

     componentDidMount: function () {
     dispatcher.dispatch({type: constants.all});
     },

     componentsWillUnmount: function () {
     emitter.off(constants.all);
     },

     create: function () {
     this.refs.create.show();
     },

     renderList: function (complete) {
     return <List todos={_.filter(this.state.todos, function (x) {
     return x.isComplete === complete;
     })} />;
     },*/
    render: function () {
        return <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h2 className="spacing-bottom">Incomplete</h2>
                </div>
                <div className="col-md-5">
                    <h2 className="spacing-bottom">Complete</h2>
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary pull-right" onClick={this.create}>New Task</button>
                </div>
            </div>
        </div>;
    }
});
React.render(<Todo/>, document.getElementById('main'));
