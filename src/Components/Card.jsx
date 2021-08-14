import './Card.css';

function Card(props) {
	const temperature = Math.round(props.temp - 273);
	return (
		<div className="card">
			<div className="card__head">
				<div className="city-name">
					<span>{props.city},</span>
				</div>
				<div className="country-name">
					<span>{props.country}</span>
				</div>
			</div>
			<div className="card__body">
				<div className="temp">
					<span>{temperature.toString()}</span>
					<span>&#8451;</span>{' '}
				</div>
			</div>
			<div className="card__footer">
				<div>
					<span className="description">{props.description}</span>
				</div>
				<div>
					<img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className="img" alt="" />
				</div>
			</div>
		</div>
	);
}

export default Card;
