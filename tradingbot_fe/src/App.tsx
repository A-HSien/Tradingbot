import { useEffect } from 'react';
import Header from './layout/Header';
import { classnames } from 'src/styles/classnames';
import {
  HashRouter as Router
} from "react-router-dom";
import AppRoutes from './common/AppRoutes';
import './common/AxiosInterceptors';
import baseStyles from './styles';
import Overlay from './layout/Overlay';


const appStyles = classnames(
  baseStyles.background,
  baseStyles.textColor,
  'min-h-screen',
);

const App = () => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className={appStyles}>
      <Overlay />
      <Router>
        <Header />
        <AppRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
