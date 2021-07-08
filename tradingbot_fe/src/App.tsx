import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/account/all');
      console.log(data);
    };
    fetchData();
  }, []);


  return (
    <>
        <h3>OpenAPI spec: <a href="http://35.194.167.78/openapi.json">/openapi.json</a></h3>
        <h3>API Explorer: <a href="http://35.194.167.78/explorer">/explorer</a></h3>

    </>
  );
}

export default App;
