import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
