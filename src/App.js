import './App.css';
import Weather from './Components/Weather';

function App() {
	return (
		<div className="App">
			<div className="header">
				<span>Weather today</span>
			</div>
			<Weather />
		</div>
	);
}

export default App;
