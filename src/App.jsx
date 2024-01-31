import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {client} from '../config'
import Table from './components/Table'
import Winner from './components/Winner'
import Test from './components/Test'

import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-start h-screen bg-center  bg-cover bg-repeat overflow-x-auto text-white' style={{ backgroundImage: 'url("/static/images/cs-cup-poster.jpg")' }}>
      <div className='p-5'>
          <h1 className='font-["calvera"] text-6xl md:text-8xl underline underline-offset-8'>
            CS CUP
          </h1>
          <h3 className='mt-3 p-5 text-2xl text-center font-["calvera"]'>
            POINTS TABLE
          </h3>
        </div>
        <Table/>
        <h3 className='p-5 text-3xl text-center font-["calvera"] mt-5'>
           WINNERS
        </h3>
      <Winner/>

      </div>
      
    </>
)
}

export default App
