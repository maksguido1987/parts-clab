import '../app/tailwind.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';
import { store } from '../shared/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress color='#5DC563' />
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  );
}

export default MyApp;
