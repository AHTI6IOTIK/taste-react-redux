import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const Cabinet = ({authUser, chats}) => {


	if (!authUser.isAuthorize) {

		return <div>You needs to authorize</div>
	}

	return (
		<div>
			<div>Cabinet</div>

			{
				chats.length > 0 &&
					chats.map((item, key) => {
						console.log(item);
					})
			}
		</div>
	)
};

export default withRouter(
	connect(
		state => ({
			authUser: {...state.authUser},
			chats: [...state.chats],

		})
	)(Cabinet)
);