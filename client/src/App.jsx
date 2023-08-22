import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Canvas from './canvas/index'

function App() {

  return (
    <>
      <main className='app transition-all eas-in'>
        <Home/>
        <Canvas/>
        <Customizer/>
      </main>
    </>
  )
}

export default App
