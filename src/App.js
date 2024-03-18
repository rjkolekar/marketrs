import Header from './components/common/Header';
import Products from './components/pages/Products';
import Features from './components/pages/Features';
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import Newsletter from './components/common/Newsletter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarketPlace from './components/pages/MarketPlace';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/features" element={<Features />} />
        <Route path="/company" element={<Company />} />
        <Route path="/marketplace" element={<MarketPlace />} />
      </Routes>
      <Newsletter />
      <Footer />
    </Router>
  );
}

export default App;
