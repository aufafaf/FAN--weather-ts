import './index.css'
import { fetchWeather } from './services/api'

function App() {

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <button type="button" className='border p-5' onClick={() => fetchWeather()}> fetch API</button>
    </div>
  )
}

export default App
