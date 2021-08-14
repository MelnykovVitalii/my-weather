import { useEffect, useState } from 'react';
import Card from './Card';
import './Weather.css';
function Weather() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Vapnyarka,ua&appid=23d735b0cff843665f2f29f7790ab395')
			.then((res) => res.json())
			.then(
				(result) => {
					console.log(result);
					setIsLoaded(true);
					setItems({
						city: result.name,
						county: result.sys.country,
						description: result.weather[0].description,
						icon: result.weather[0].icon,
						temp: result.main.temp,
					});
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Ошибка: {error.message}</div>;
	} else if (!isLoaded && items.main) {
		// console.log(items);
		return <div>Загрузка...</div>;
	} else {
		return (
			<div className="wrapper">
				<Card
					city={items.city}
					country={items.county}
					description={items.description}
					icon={items.icon}
					temp={items.temp}
				/>
			</div>
		);
	}
}

export default Weather;
