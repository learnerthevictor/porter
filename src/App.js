import './App.css';
import { Navbar } from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Banner from './component/Banner';
import Footer from './component/Footer';
import Grow from './component/Grow';
import Faq from './component/Faq';
import Category from './component/Category';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <Category/>
      <Grow/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
