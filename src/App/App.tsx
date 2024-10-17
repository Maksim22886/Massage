import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './App.scss';
import { AllComponent } from '../components/allComponent/AllComponent';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/massage" element={<AllComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
