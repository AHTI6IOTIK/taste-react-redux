import React from 'react';
import {Redirect} from 'react-router-dom';

const AuthForm = (props) => {

	let _login, _pass;

	const submit = e => {
		e.preventDefault();

		props.onLoginUser(_login.value, _pass.value);

		_login.value = '';
		_pass.value = '';

	};

	if (props.userStatus.isAuthorize) {
		return (<div>
			<Redirect to={'/cabinet'} />
		</div>)
	}

	return (
		<form className={'auth_form'} onSubmit={submit}>
			<label htmlFor="login">Логин</label>
			<input ref={input => _login = input} type="text" name="login" id='login' required/>
			<label htmlFor="pass">Пароль</label>
			<input ref={input => _pass = input} type="password" name="pass" id='pass' required/>
			<button>AUTH</button>
		</form>
	)
};

export default AuthForm;