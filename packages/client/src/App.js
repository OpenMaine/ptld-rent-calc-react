import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';

function App() {
  return (
      <div className="container-fluid p-0">
        <Header />
          <main className="col-lg-10 m-auto mt-5">
            <div className="row">
              <div className="col">Resources</div>
              <div className="col-9 col-lg-11">
                <div className="row">
                  <p>In November 2020, Portland, Maine passed a new ordinance to limit increases in rent. The purpose of the ordinance is to promote community stability and protect tenants, while ensuring landlords receive a fair return on investment. Full text of the ordinance can be found <a href="https://www.portlandmaine.gov/DocumentCenter/View/1070/Chapter-6-Buildings-and-Building-Regulations---Revised-1132020" target="_BLANK" rel="noreferrer">here</a>.</p>
                  <p>This calculator is a resource to help tenants and landlords calculate the new allowed yearly rent increase for their unit(s).</p>
                </div>
                <section className="row">
                  <Calculator/>
                </section>
              </div>
            </div>
          </main>
        <Footer />
      </div>
  );
}

export default App;
