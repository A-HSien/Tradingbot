import { useEffect } from 'react';
import Header from './layout/Header';
import { classnames } from 'src/styles/classnames';
import {
  HashRouter as Router
} from "react-router-dom";
import AppRoutes from './common/AppRoutes';
import Footer from './layout/Footer';
import { Provider } from 'mobx-react';
import stores from './stores';


const appStyles = classnames(
  'bg-white', 'dark:bg-gray-700',
  'text-black', 'dark:text-white',
  'min-h-screen'
);

const App = () => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
    (async () => {
      const data = await fetch('/account/all');
      console.log(data);
    })();
  }, []);

  return (
    <div className={appStyles}>
      <Provider {...stores}>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
