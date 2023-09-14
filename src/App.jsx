
import './App.css'
import Calculator1 from './components/Calculator/Calculator1'
import Calculator2 from './components/Calculator/Calculator2'

function App() {
  
  return (
    <div className='flex'>
    <Calculator1/>
    <div className='border-2 h-screen border-black '></div>
    <Calculator2/>
    </div>
  )
}

export default App
