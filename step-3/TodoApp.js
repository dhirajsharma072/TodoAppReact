/**
 * @jsx React.DOM
 */

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
        return (<ul style={styleObject} >{
            tasksList.map(function (task) {
                return (<li>{task}</li>)
            })
            }</ul>);
    }

});


var Todo = React.createClass({
      render: function () {
        return <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h2 className="spacing-bottom">Incomplete</h2>
                    <List tasks={[1, 2, 3]}/>
                </div>
                <div className="col-md-5">
                    <h2 className="spacing-bottom">Complete</h2>
                    <List tasks={[1, 2, 3, 4]} />
                </div>
                <div className="col-md-2">
                    <button type="button" className="btn btn-primary pull-right" onClick={this.create}>New Task</button>
                </div>
            </div>
        </div>;
    }
});
React.render(<Todo/>, document.getElementById('main'));
