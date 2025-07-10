import './App.css'
import HomePage from './components/HomePage/HomePage.jsx'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ModalProductInfo from "./components/ModalProductInfo.jsx";

function App() {

  return (
    <div className="relative overflow-x-hidden">
        <ModalProductInfo />
        <div className='z-[-50] w-[2880px] h-[2880px] rounded-[50%] bg-[#FFAB08] absolute transform -translate-x-1/2 left-[50%] top-[-2200px]'></div>
        <Header />
        <HomePage />
        <Footer />

    </div>
  )
}

export default App
