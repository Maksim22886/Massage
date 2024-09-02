import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route index element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />*/}
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
