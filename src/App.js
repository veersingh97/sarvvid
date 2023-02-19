import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Header/header';
import Footer from './Footer/footer';
import Home from './Home/home';
import ContactUs from './Contact/contact';
import Pricing from './Pricing/pricing';
import Services from './Services/services';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </>
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
