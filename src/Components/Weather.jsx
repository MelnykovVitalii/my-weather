import { useEffect, useState } from 'react';
import Card from './Card';
// import moment from 'moment';
import './Weather.css';
function Weather() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	// dt: 1628966327

	// console.log(moment(1628966901722));
	// Примечание: пустой массив зависимостей [] означает, что
	// этот useEffect будет запущен один раз
	// аналогично componentDidMount()
	useEffect(() => {
		// console.log(new Date().getHours());
		// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
		// fetch('http://api.openweathermap.org/data/2.5/weather?q=Vapnyarka,ua&appid=23d735b0cff843665f2f29f7790ab395')
		// fetch('http://api.openweathermap.org/data/2.5/forecast?q=Vapnyarka&appid=23d735b0cff843665f2f29f7790ab395')
		fetch('http://api.openweathermap.org/data/2.5/weather?q=Vapnyarka,ua&appid=23d735b0cff843665f2f29f7790ab395')
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
				// Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
				// чтобы не перехватывать исключения из ошибок в самих компонентах.
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
				{/* <Card {...items} /> */}
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
