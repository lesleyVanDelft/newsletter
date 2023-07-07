import successIcon from '../assets/icon-success.svg';

const Modal = ({ email }) => {
	return (
		<main className="Modal">
			<img src={successIcon} alt="Succes icon checkmark" />
			<h1 className="Modal__header">Thanks for subscribing!</h1>
			<p className="Modal__text">
				A confirmation email has been sent to {email}. Please open it and click
				the button inside to confirm your subscription!
			</p>
			<button className="Modal__button">Dismiss Message</button>
		</main>
	);
};

export default Modal;
