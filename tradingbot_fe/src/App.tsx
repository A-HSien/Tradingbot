import { useEffect } from 'react';
import './App.scss';

function App() {

  const fetchData = async () => {
    const data = await fetch('/account/all');
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <>
    <div className="info">
      <h1>Tradingbot</h1>
      <p>Version 1.0.0</p>

      <h3>OpenAPI spec: <a href="http://35.194.167.78/openapi.json">/openapi.json</a></h3>
      <h3>API Explorer: <a href="http://35.194.167.78/explorer">/explorer</a></h3>
    </div>

    <footer className="power">
      <a href="https://loopback.io" target="_blank">
        <img src="https://loopback.io/images/branding/powered-by-loopback/blue/powered-by-loopback-sm.png" />
      </a>
    </footer>
  </>;
}

export default App;
