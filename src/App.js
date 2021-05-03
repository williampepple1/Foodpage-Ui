import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalStyle} from "./GlobalStyles";
import Hero from "./component/Hero/index"
import Products from './products';
import { productData, productDataTwo } from './products/data';
import Feature from './Feature';
import Footer from './Footer';
function App() {
  return (
    <Router>
    <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite meal" data={productData}/>
      <Feature />
      <Products heading="Taste our meal and keep coming back" data={productDataTwo}/>
      <Footer />
    </Router>
  );
}

export default App;
