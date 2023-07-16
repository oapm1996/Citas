import Header from './components/header'
import Formulario from './components/formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 flex'>
      <Formulario/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
