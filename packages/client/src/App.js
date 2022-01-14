import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container-fluid p-0">
      <Header />
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div className="col"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
