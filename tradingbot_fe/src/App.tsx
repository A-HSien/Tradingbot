import { useEffect } from 'react';
import Header from './layout/Header';
import { classnames } from 'src/styles/classnames';
import {
  HashRouter as Router
} from "react-router-dom";
import AppRoutes from './common/AppRoutes';
// import Footer from './layout/Footer';
import { Provider } from 'mobx-react';
import stores from './stores';
import './common/AxiosInterceptors';
import baseStyles from './styles';


const appStyles = classnames(
  baseStyles.background,
  baseStyles.textColor,
  'min-h-screen'
);

const App = () => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={appStyles}>
      <Provider {...stores}>
        <Router>
          <Header />
          <AppRoutes />
          {/* <Footer /> */}
        </Router>
      </Provider>
    </div>
  );
}

export default App;
