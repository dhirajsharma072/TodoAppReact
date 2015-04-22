var React = require('react');
var ActionCreator = require('../TodoActionCreator');
var DeleteTask = React.createClass({
    render: function () {
        return (
            <div className="input-group-btn">
                <button type="button" className="btn btn-default"  aria-expanded="false"  onClick={this._delete} > Delete </button>
            </div>
        )
    },
    _delete: function () {
        console.log(this.props.index);
        ActionCreator.removeTask(this.props.index);
    }
});

module.exports = DeleteTask;
