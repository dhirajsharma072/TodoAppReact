'use strict';
var Hello = React.createClass({
    render: function () {
        return (<div>Hello React</div>);
    }
});

React.render(<Hello/>, document.getElementById('container'));

