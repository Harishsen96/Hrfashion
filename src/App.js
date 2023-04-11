import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Service";
import ProductDetails from "./Components/Products/ProductDetails";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/product" element={<ProductDetails />} />
           <Route path='/product/:id' element={<ProductDetails/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
