var React = require('react');
var DeleteTask = require('./DeleteTask');

var styleObject = {
    'listStyleType': 'none'
};

var List = React.createClass({
    render: function () {
        var tasksList = this.props.tasks;
        return (<div className="list-group" style={styleObject} >{
            tasksList.map(function (task, index) {
                return (
                    <div  className="input-group">
                        <span className="input-group-addon">
                            <input type="checkbox" aria-label="..."/>
                        </span>
                        <a href="#" className="form-control"  aria-label="..." >{task}</a>
                        <DeleteTask index={index}/>
                    </div>
                )
            })
            }
        </div>);
    }
});

module.exports = List;
