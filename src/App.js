import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
     <footer>
       Coded by Kelsi Williams and is{" "} 
       <a href="https://github.com/kelsi-will/react-weather-app" target="_blank" rel="noreferrer">open-sourced</a>
        {" "}on GitHub
     </footer>
     </div>
    </div>
  );
}

export default App;
