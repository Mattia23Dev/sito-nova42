import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/custom.css';
import Layout from './components/Layout';
import { ReactNotifications } from 'react-notifications-component'
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux'
import store from './../redux/store.js';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  let mainBG = 'bg-nova';
  let alternative = '';
  let hideNavBar = false;
  let navbarLight = false;

  switch(router.pathname){
    case '/accedi':
      mainBG = 'bg-nova-dark-service';
      break;
    case '/corso':
      mainBG = 'bg-nova-dark';
      break;
    case '/chi-siamo':
      mainBG = 'bg-nova-dark';
      alternative = 'laptop-top-margin';
      alternative = '';
      hideNavBar = false;
      break;
    case '/whoweare':
        mainBG = 'bg-nova-dark';
      break;
    case '/web-site':
        mainBG = 'bg-nova-dark-service';
        break;
    case '/contattaci':
      mainBG = 'bg-nova-dark main-nova-container';
      break;
    case '/servizi':
      mainBG = 'bg-nova';
      break;
    case '/privacy':
      mainBG = 'bg-nova-dark';
      break;
    case '/software-development':
      mainBG = 'bg-nova-dark-service';
      break;
    case '/blockchain':
      mainBG = 'bg-nova-dark-service';
      break;
    case '/app-development':
      mainBG = 'bg-nova-dark';
      navbarLight = true;
      break;

    default:
      mainBG = 'bg-nova';
  }


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import('react-notifications-component/dist/theme.css');
  }, []);

  return (
    <Provider store={store}>
      <Layout bg={mainBG} altStyle={alternative} isLight={navbarLight} hideNavBar={hideNavBar} path={router.pathname} >
        <ReactNotifications />
        <Component {...pageProps}/>
      </Layout>
    </Provider>
    )

}

export default MyApp
