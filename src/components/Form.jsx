import { useEffect, useState } from 'react';
import listIcon from '../assets/icon-list.svg';
import validator from 'validator';
const Form = () => {
	const [valid, setValid] = useState(false);
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');

	const validateEmail = e => {
		setEmail(e.target.value);

		let email = e.target.value;

		if (validator.isEmail(email)) {
			setMessage('');
			// setEmail('');
		} else {
			setMessage('Valid email required');
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (email !== '') {
			setEmail('');
			// setMessage('');
			// setValid(true);
			// console.log(message);
		} else {
			return;
		}
	};

	useEffect(() => {
		message !== '' && setValid(true);
		console.log(message);
		console.log(valid);
	}, [message]);
	return (
		<form className="Form" onSubmit={e => handleSubmit(e)}>
			<div className="Form__text">
				<h1>Stay updated!</h1>
				<p>Join 60,000+ product managers receiving monthly updates on:</p>
				<ul className="Form__text--list">
					<li>
						<span>
							<img src={listIcon} alt="Checkmark icon" />
						</span>
						Product discovery and building what matters
					</li>
					<li>
						<span>
							<img src={listIcon} alt="Checkmark icon" />
						</span>
						Measuring to ensure updates are a success
					</li>
					<li>
						<span>
							<img src={listIcon} alt="Checkmark icon" />
						</span>
						And much more!
					</li>
				</ul>
			</div>
			<div className="Form__input">
				<label htmlFor="email" aria-required>
					Email address
					<span className="error">{message !== '' && message}</span>
				</label>
				<input
					className={`Form__input--email ${message !== '' ? 'error' : ''}`}
					type="text"
					name="email"
					id="email"
					placeholder="email@company.com"
					value={email}
					onChange={e => validateEmail(e)}
				/>
			</div>

			<button type="submit" className="Form__button">
				Subscribe to monthly newsletter
			</button>
		</form>
	);
};

export default Form;
