import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import '../styles/header.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
