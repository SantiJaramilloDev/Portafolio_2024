import { Informacion } from './components/Informacion/Informacion';
import MyImg from './assets/MyImg.png'
import Flecha from './assets/flecha.png'
import './App.css'
import 'animate.css';

function App() {

  const scrollPage = () => {
    window.scroll({
      top: 100,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <img src={MyImg} alt="Mi imagen" className='MyImg animate__animated animate__bounceInDown'/>
      <h1 className='title animate__animated animate__bounceInLeft animate__delay-1s'>¡Bienvenidos!</h1>
      <h1 className='title2 animate__animated animate__zoomIn animate__delay-2s'>Soy Santiago Jaramillo</h1>
      <p className='text animate__animated animate__bounceInUp animate__delay-3s'>Desarrollador frontend con conocimientos en backend</p>
      <img src={Flecha} alt="Flecha" className='flecha' onClick={scrollPage}/>   
      <Informacion />
    </>
  )
}

export default App
