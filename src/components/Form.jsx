import listIcon from '../assets/icon-list.svg';
const Form = () => {
	return (
		<form className="Form">
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
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="email@company.com"
				/>
			</div>

			<button type="submit" className="Form__button">
				Subscribe to monthly newsletter
			</button>
		</form>
	);
};

export default Form;
