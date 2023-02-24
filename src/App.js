import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Books from './Routes/Books/Books';
import Categories from './Routes/Categories/Categories';
import Account from './Routes/Account/Account';
import ErrorRoute from './Routes/ErrorRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </>
  );
}

export default App;
