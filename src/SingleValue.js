var React = require('react');
var classes = require('classnames');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

var SingleValue = createReactClass({
	propTypes: {
		placeholder: PropTypes.string,       // this is default value provided by React-Select based component
		value: PropTypes.object              // selected option
	},
	render () {
		var classNames = classes('Select-placeholder', this.props.value && this.props.value.className);
		return (
			<div
				className={classNames}
				style={this.props.value && this.props.value.style}
				title={this.props.value && this.props.value.title}
				>{this.props.placeholder}</div>
		);
	}
});

module.exports = SingleValue;
