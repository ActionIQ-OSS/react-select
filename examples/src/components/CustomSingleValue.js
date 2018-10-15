import React from 'react';
import Gravatar from 'react-gravatar';
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

var SingleValue = createReactClass({
	propTypes: {
		placeholder: PropTypes.string,
		value: PropTypes.object
	},
	render () {
		var obj = this.props.value;
		var size = 15;
		var gravatarStyle = {
			borderRadius: 3,
			display: 'inline-block',
			marginRight: 10,
			position: 'relative',
			top: -2,
			verticalAlign: 'middle',
		};
		
		return (
			<div className="Select-placeholder">
				{obj ? (
					<div>
						<Gravatar email={obj.email} size={size} style={gravatarStyle} />
						{obj.value}
					</div>
				) : (
					this.props.placeholder
				)
			}
		</div>
	);
	}
});

module.exports = SingleValue;
