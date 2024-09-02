import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route index element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />*/}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
